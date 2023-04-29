import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Amplify, Auth } from "aws-amplify";
import awsConfig from "./src/aws-exports";
Amplify.configure(awsConfig);
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Authenticator.Provider>
        <Authenticator>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </Authenticator>
      </Authenticator.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
