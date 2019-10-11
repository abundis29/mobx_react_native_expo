import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
} from "react-navigation";

import { createBottomTabNavigator } from 'react-navigation-tabs';

import MainScreen from "../screens/Home";
import SettingsScreen from "../screens/Settings";
import TabBar from '../components/TabBar';




const AppNavigator = createBottomTabNavigator(
  {
    MainStack: MainScreen,
    Settings: SettingsScreen
  },
  {
    tabBarComponent: props => <TabBar {...props} />
  }
);

export default createAppContainer(AppNavigator);
