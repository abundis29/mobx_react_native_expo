import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { theme, withTheme} from "../themes/themeProvider";



MainScreen = ({theme}) => {
  return (
    <View style={[style.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[style.text, { color: theme.color }]}>MAIN PART</Text>
    </View>
  );
};

export default withTheme(MainScreen);

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontWeight: "bold"
  }
});
