import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Amplify, Auth } from "aws-amplify";
import awsConfig from "./src/aws-exports";
Amplify.configure(awsConfig);
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";

export default function App() {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
      </Authenticator>
    </Authenticator.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
