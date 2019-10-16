import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import AppNavigator from "./navigation/Navigator";
import { observer } from "mobx-react-lite";
// Expo
import { Asset } from "expo-asset";
import Sentry from "sentry-expo";
import * as Font from "expo-font";
import * as Icon from "@expo/vector-icons";

// MobX Config
import { Provider as MobXProvider } from "mobx-react";
import appStore from "./stores/appStore";

// Theme
import { ThemeContextProvider } from "./themes/themeProvider";

const App = observer(() => {
  const _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/robot-dev.png"),
        require("./assets/images/robot-prod.png")
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
        "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
        "montserrat-italic": require("./assets/fonts/Montserrat-Italic.ttf"),
        "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf")
      })
    ]);
  };

  const _handleLoadingError = error => {
    Sentry.captureException(error);
  };

  const _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  return (

      <ThemeContextProvider>
        <AppNavigator />
      </ThemeContextProvider>
  );
});

export default App;

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//     </View>
//   );
// }
