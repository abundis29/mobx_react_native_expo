import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { withTheme } from "../themes/themeProvider";

interface Props {
  excercise: string;
  repsAndWeight: string;
  theme: any;
}

const style = StyleSheet.create({
  card: {
    borderRadius: 8,
    margin:10,
    shadowOpacity: 0.3,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
    flexDirection: "column",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  text: {},
  topRow: {
    flexDirection: "row",
    justifyContent:'space-between'
  },

});

export const WorkoutCard: React.FC<Props> = ({
  theme,
  excercise,
  repsAndWeight
}) => {
  return (
    <View style={[style.card, { backgroundColor: theme.tertiary }]}>
      <View style={style.topRow}>
        <Text style={[style.text, { color: theme.primary }]}>
          {excercise}
        </Text>
        <Text style={[style.text, { color: theme.primary }]}>
          {repsAndWeight}
        </Text>
      </View>
    </View>
  );
};

export default withTheme(WorkoutCard);
