import * as React from "react";
import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { WorkoutCard } from "../components/WorkoutCard";
import { observer } from "mobx-react-lite";
import Constants from 'expo-constants';

import { withTheme } from "../themes/themeProvider";

interface Props {
  theme: any;
}

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item"
  }
];

export const CurrentWorkout: React.FC<Props> = observer(({ theme }) => {
  return (
    <View style={[style.container, { backgroundColor: theme.primary }]}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <WorkoutCard theme={theme} excercise={item.title} repsAndWeight={item.title} />    }
        keyExtractor={item => item.id}
      />
    </View>
  );
});

export default withTheme(CurrentWorkout);

const style = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 0,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
