import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

const ScreenHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.parentWrapper}>
      <Entypo
        name="chevron-left"
        size={44}
        color="black"
        onPress={() => navigation.goBack()}
      />
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  parentWrapper: {
    backgroundColor: "transparent",
    paddingTop: 30,
  },
});
