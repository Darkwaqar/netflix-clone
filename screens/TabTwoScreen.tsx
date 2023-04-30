import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Auth } from "aws-amplify";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

const TabTwoScreen = () => {
  const onLogout = () => {
    Auth.signOut();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
      <Pressable
        onPress={onLogout}
        style={{ padding: 10, backgroundColor: "darkgrey" }}
      >
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default TabTwoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
