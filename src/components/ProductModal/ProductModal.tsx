import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Product } from "@/apis/api";
import { styles } from "./ProductModal.styles";
import { COLORS } from "@/themes/theme";
import { useCartStore } from "@/store/cartStore";
import Toast from "react-native-toast-message";
import { Ionicons } from "@expo/vector-icons";

interface ProductModalProps {
  visible: boolean;
  product: Product | null;
  onClose: () => void;
}

export const ProductModal = ({
  visible,
  product,
  onClose,
}: ProductModalProps) => {
  const [imageError, setImageError] = useState(false);

  const { addToCart } = useCartStore();

  // Reset imageError when product changes
  useEffect(() => {
    setImageError(false);
  }, [product]);

  if (!product) {
    return (
      <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
        onRequestClose={onClose}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="large" color={COLORS.primaryBlue} />
            <Text>Loading product details...</Text>
          </View>
        </View>
      </Modal>
    );
  }

  const getBadgeColor = (dealType: "SALE" | "REGULAR") => {
    return dealType === "SALE" ? COLORS.primaryRed : COLORS.primaryBlue;
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
    });

    Toast.show({
      type: "success",
      text1: "Added to Cart",
      text2: `${product.name} has been added to your cart.`,
      visibilityTime: 3000,
    });

    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            accessibilityLabel="close"
            style={styles.closeButton}
            onPress={onClose}
          >
            <Ionicons name="close" size={20} color={COLORS.primaryBlack} />
          </TouchableOpacity>
          <Image
            source={
              !product.imageUrl || imageError
                ? require("@/assets/fallback_img.jpg")
                : { uri: product.imageUrl }
            }
            style={styles.modalImage}
            resizeMode="cover"
            onError={() => setImageError(true)}
          />
          <View
            style={[
              styles.dealTypeBadge,
              { backgroundColor: getBadgeColor(product.dealType) },
            ]}
          >
            <Text style={styles.dealTypeText}>{product.dealType}</Text>
          </View>
          <Text style={styles.modalName}>{product.name}</Text>
          <Text style={styles.modalPrice}>${product.price}</Text>
          <Text style={styles.modalCategory}>{product.category}</Text>
          <Text style={styles.modalDistance}>
            {product.distanceInKm} km away
          </Text>
          <Text style={styles.modalPostedAt}>
            Posted on: {new Date(product.postedAt).toLocaleDateString()}
          </Text>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={handleAddToCart}
          >
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
