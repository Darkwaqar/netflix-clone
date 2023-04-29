import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface HomeCategoryProps {
  category: any;
}
const HomeCategory = (props: HomeCategoryProps) => {
  return (
    <View>
      <Text>HomeCategory</Text>
    </View>
  );
};

export default HomeCategory;

const styles = StyleSheet.create({});
