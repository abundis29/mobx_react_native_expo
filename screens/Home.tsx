import React, { Component, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { theme, withTheme } from "../themes/themeProvider";
import appStore from "../stores/appStore";
import { useLocalStore, useObserver } from "mobx-react-lite";

// @inject('ApplicationState')
// @observer

export const MainScreen = ({ theme }) => {
  const [count, setCount] = useState(0);
  return useObserver(() => (
    <View style={[style.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[style.text, { color: theme.color }]}>MAIN PART</Text>
      <Text>
           {count}
      </Text>

      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>Increment</Text>
      </TouchableOpacity>
    </View>
  ));
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
