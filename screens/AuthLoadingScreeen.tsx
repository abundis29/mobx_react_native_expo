import React, { useContext, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, StatusBar } from "react-native";
import { observer } from "mobx-react-lite";
import { CounterStoreContext } from "../stores/CounterStore";
import Constants from "expo-constants";
import $t from "../config/i18n";
import { withTheme } from "../themes/themeProvider";
import { MainScreen } from "./Home";
import { setTimeout } from "timers";
import authService from "../services/AuthService";

interface Props {
  theme: any;
  navigation: any;
}

export const AuthLoading: React.FC<Props> = observer(
  ({ theme, navigation }) => {
    _bootstrapAsync = async () => {
      const user = await authService.getUser();
      if (user) {
        this.props.setActiveUser(user);
        this.props.getUser();
      } else {
        this.props.navigation.navigate("Home");
      }

      // This will switch to the Main screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
    };

    useEffect(() => {
      navigation.navigate("Home");
    }, []);

    return (
      <View
        style={[
          style.container,
          { backgroundColor: theme ? theme.primary : "transparent" }
        ]}
      >
        <ActivityIndicator style={style.loading} />
        <StatusBar barStyle="default" />
      </View>
    );
  }
);

export default withTheme(AuthLoading);

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: Constants.statusBarHeight,
    justifyContent: "center"
  },
  loading: {
    marginTop: 30
  }
});
