import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useCartStore } from "@/store/cartStore";
import { styles } from "./MyCart.styles";
import LottieView from "lottie-react-native";
import Toast from "react-native-toast-message";
import { Ionicons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";

const MyCart = ({ navigation }: any) => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCartStore();

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Toast when removing item from cart
  const showToast = (message: string) => {
    Toast.show({
      type: "info",
      text1: message,
      visibilityTime: 3000,
    });
  };

  // Remove item from cart
  const removeItem = (item: any) => {
    Alert.alert(
      "Remove Item",
      `Are you sure you want to remove ${item.name} from cart?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Remove",
          style: "destructive",
          onPress: () => {
            removeFromCart(item.id);
            showToast(`${item.name} removed from cart.`);
          },
        },
      ]
    );
  };

  const checkOutItems = () => {
    showToast("Checking out items...");
    clearCart();
    setTimeout(() => {
      showToast("Items checked out successfully!");
      navigation.navigate("Home");
    }, 3000);
  };

  // Handle quantity increment
  const handleIncrement = (item: any) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  // Handle quantity decrement
  const handleDecrement = (item: any) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeItem(item);
    }
  };

  // Render swipeable delete button
  const renderRightActions = (item: any) => {
    return (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => removeItem(item)}
      >
        <Ionicons name="trash" size={24} color="white" />
      </TouchableOpacity>
    );
  };

  // Render cart item
  const renderCartItem = ({ item }: { item: any }) => (
    <Swipeable renderRightActions={() => renderRightActions(item)}>
      <View style={styles.cartItem}>
        <Image source={{ uri: item.imageUrl }} style={styles.cartItemImage} />
        <View style={styles.cartItemInfo}>
          <Text style={styles.cartItemName}>{item.name}</Text>
          <Text style={styles.cartItemPrice}>${item.price.toFixed(2)}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => handleDecrement(item)}
            >
              <Ionicons name="remove" size={16} color="white" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => handleIncrement(item)}
            >
              <Ionicons name="add" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Swipeable>
  );

  return (
    <View style={styles.container}>
      {/* Cart Items or Empty State */}
      {cart.length > 0 ? (
        <>
          <FlatList
            data={cart}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />

          {/* Total Price and Checkout Button */}
          <View style={styles.footer}>
            <Text style={styles.totalPriceText}>
              Total: ${totalPrice.toFixed(2)}
            </Text>
            {/* Check out Button */}
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={checkOutItems}
            >
              <Text style={styles.checkoutButtonText}>Check Out</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.emptyCartContainer}>
          <LottieView
            source={require("@/assets/empty-cart.json")}
            autoPlay
            loop
            style={styles.emptyCartAnimation}
          />
          <Text style={styles.emptyCartText}>Your cart is empty!</Text>
        </View>
      )}
    </View>
  );
};

export default MyCart;
