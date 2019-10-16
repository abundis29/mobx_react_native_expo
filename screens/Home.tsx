import React, { useContext, Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
  SafeAreaView
} from "react-native";
import { withTheme } from "../themes/themeProvider";
import { observer } from "mobx-react-lite";
import { CounterStoreContext } from "../stores/CounterStore";
import Constants from "expo-constants";
import $t from '../config/i18n';




interface Props {
  theme: any;
}


export const MainScreen: React.FC<Props> = observer(({ theme }) => {

  const counterStore = useContext(CounterStoreContext);

  return (
    <SafeAreaView style={[style.container, { backgroundColor: theme.primary, marginTop:0 }]}>

        <Text style={[style.text, { color: theme.secondary }]}>{$t('common.main')}</Text>
        <Text style={[style.text, { color: theme.secondary }]}>
          {counterStore.count}
        </Text>

        <TouchableOpacity onPress={() => counterStore.count++}>
          <Text style={[style.text, { color: theme.secondary }]}>
            Increment
          </Text>
        </TouchableOpacity>
        <View style={style.fixToText}>
          <Button
            title="Left button"
            onPress={() => Alert.alert("Left button pressed")}
          />
          <Button title="Right button" onPress={() => counterStore.count++} />
        </View>
    </SafeAreaView>
  );
});

export default withTheme(MainScreen);

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: Constants.statusBarHeight,
    justifyContent: "center"
  },
  text: {
    fontWeight: "bold"
  },
  title: {
    textAlign: "center",
    marginVertical: 8
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
