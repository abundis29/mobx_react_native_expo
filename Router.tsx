import React, { useContext } from "react";
import { RootStoreContext } from "./stores/RootStore";
import { observer } from "mobx-react-lite";
import { MainScreen } from "./screens/Home";
import { SettingsScreen } from "./screens/Settings";

export const Router = observer(() => {
  const rootStore = useContext(RootStoreContext);

  return rootStore.routerStore.screen === "MainScreen" ? (
    <MainScreen />
  ) : (
    <SettingsScreen />
  );
});

