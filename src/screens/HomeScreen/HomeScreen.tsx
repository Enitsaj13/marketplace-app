import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
  Text,
} from "react-native";
import { ProductsShopAPI, Product } from "@/apis/api";
import { COLORS } from "@/themes/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { Search, ProductModal } from "@/components";
import { styles } from "./HomeScreen.styles";
import { Ionicons } from "@expo/vector-icons";

const api = new ProductsShopAPI();

const HomeScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<
    "Garden" | "Clothing" | "Household" | undefined
  >(undefined);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [imageError, setImageError] = useState(false);

  // Fetch products
  const fetchProducts = async (
    page: number,
    category: typeof selectedCategory
  ) => {
    setLoading(true);
    try {
      const response = await api.getProducts({ page, category });
      if (page === 1) {
        setProducts(response.data);
        setFilteredProducts(response.data);
      } else {
        setProducts((prev) => [...prev, ...response.data]);
        setFilteredProducts((prev) => [...prev, ...response.data]);
      }
      setHasMore(
        response.pagination.currentPage < response.pagination.totalPages
      );
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Load initial products
  useEffect(() => {
    setPage(1);
    fetchProducts(1, selectedCategory);
  }, [selectedCategory]);

  // Reset imageError when product changes
  useEffect(() => {
    setImageError(false);
  }, [products]);

  // Handle pull-to-refresh
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(1);
    fetchProducts(1, selectedCategory).then(() => setRefreshing(false));
  }, [selectedCategory]);

  // Handle infinite loading
  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
      fetchProducts(page + 1, selectedCategory);
    }
  };

  // Handle product click
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  // Get badge color based on dealType
  const getBadgeColor = (dealType: "SALE" | "REGULAR") => {
    return dealType === "SALE" ? COLORS.primaryRed : COLORS.primaryBlue;
  };

  // Handle search query change
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  // Handle settings icon press
  const handleSettingsPress = () => {
    console.log("Settings icon pressed");
  };

  // Render product item
  const renderProductItem = ({ item }: { item: Product }) => (
    <TouchableOpacity onPress={() => handleProductClick(item)}>
      <View style={styles.productItem}>
        <View>
          <Image
            source={
              imageError || !item.imageUrl
                ? require("@/assets/fallback_img.jpg")
                : { uri: item.imageUrl }
            }
            resizeMode="cover"
            style={styles.productImage}
            onError={() => setImageError(true)}
          />
          <View
            style={[
              styles.dealTypeBadge,
              { backgroundColor: getBadgeColor(item.dealType) },
            ]}
          >
            <Text style={styles.dealTypeText}>{item.dealType}</Text>
          </View>
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>${item.price}</Text>
          <Text style={styles.productCategory}>{item.category}</Text>
          <Text style={styles.productDistance}>
            {item.distanceInKm} km away
          </Text>
          <Text style={styles.productPostedAt}>
            Posted on: {new Date(item.postedAt).toLocaleDateString()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  // Render category button with icon
  const renderCategoryButton = (
    category: typeof selectedCategory,
    label: string
  ) => (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        selectedCategory === category && styles.selectedCategoryButton,
      ]}
      onPress={() => setSelectedCategory(category)}
    >
      <Text
        style={[
          styles.categoryButtonText,
          selectedCategory === category && styles.selectedCategoryButtonText,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Search and Settings Container */}
      <View style={styles.settingsAndCartContainer}>
        {/* Search Component */}
        <View style={styles.searchContainer}>
          <Search searchQuery={searchQuery} onSearchChange={handleSearch} />
        </View>

        {/* Settings Icon */}
        <TouchableOpacity onPress={handleSettingsPress} style={styles.cartIcon}>
          <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Category Selection Row */}
      <View style={styles.categoryRow}>
        {renderCategoryButton(undefined, "All")}
        {renderCategoryButton("Garden", "Garden")}
        {renderCategoryButton("Clothing", "Clothing")}
        {renderCategoryButton("Household", "Household")}
      </View>

      {/* Product List */}
      <FlatList
        style={styles.productList}
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? (
            <ActivityIndicator size="large" color={COLORS.primaryDarkGray} />
          ) : null
        }
        showsVerticalScrollIndicator={false}
      />

      {/* Product Modal */}
      <ProductModal
        visible={modalVisible}
        product={selectedProduct}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
