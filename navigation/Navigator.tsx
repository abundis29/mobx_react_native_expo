import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { createBottomTabNavigator } from "react-navigation-tabs";

import MainScreen from "../screens/Home";
import SettingsScreen from "../screens/Settings";
import TabBar from "../components/TabBar";
import CurrentWorkout from "../screens/CurrentWorkout";
import { AuthLoading } from "../screens/AuthLoadingScreeen";
import { any } from "prop-types";

const MainTabs = createBottomTabNavigator(
  {
    Home: MainScreen,
    Settings: SettingsScreen,
    Main: CurrentWorkout
  },
  {
    tabBarComponent: props => <TabBar {...props} />
  }
);

const RootStack = createStackNavigator(
  {
    Loading: {
      screen: AuthLoading
    },
    Auth: {
      screen: SettingsScreen
    },
    App: {
      screen: MainTabs
    }
  },
  {
    initialRouteName: "App",
    headerMode: 'screen',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppNavigator = createSwitchNavigator(
  {
    Loading: {
      screen: AuthLoading
    },
    // Auth: {
    //   screen: AuthStack
    // },
    App: {
      screen: RootStack
    }
  },
  {
    initialRouteName: "App"
  }
);

export default createAppContainer(AppNavigator);
