import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from "@expo/vector-icons/Entypo";
import { COLORS } from "@/themes/theme";
import { HomeScreen, MyCart, Profile } from "@/screens";
import { useCartStore } from "@/store/cartStore";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const { cart } = useCartStore();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primaryDarkGray,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Entypo
              name="home"
              size={22}
              color={`${
                focused ? COLORS.primaryBlue : COLORS.primaryLightGray
              }`}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={MyCart}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Entypo
              name="shopping-cart"
              size={22}
              color={`${
                focused ? COLORS.primaryBlue : COLORS.primaryLightGray
              }`}
            />
          ),
          tabBarBadge: cart.length > 0 ? cart.length : undefined, // Add badge with cart count
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Entypo
              name="user"
              size={22}
              color={`${
                focused ? COLORS.primaryBlue : COLORS.primaryLightGray
              }`}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    position: "absolute",
    backgroundColor: COLORS.primaryWhite,
    borderTopWidth: 0.2,
    elevation: 0,
    borderTopColor: "#e2e8f0",
  },
});
