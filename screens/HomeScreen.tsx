import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import HomeCategory from "../components/HomeCategory";
import categories from "../assets/data/categories";

const HomeScreen = () => {
  //   const [categories, setCategories] = useState<Category[]>([]);

  //   useEffect(() => {
  //     const fetchCategories = async () => {
  //       setCategories(await DataStore.query(Category));
  //     };
  //     fetchCategories();
  //   }, []);
  return (
    <View style={styles.container}>
      {/* List of categories */}
      <FlatList
        data={categories.items[0].movies}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({ container: { flex: 1 } });
