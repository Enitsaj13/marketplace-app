import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "@/navigations/TabNavigator";
import Toast from "react-native-toast-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
        <Toast /> {/* Add Toast component */}
      </GestureHandlerRootView>
    </>
  );
};

export default App;
