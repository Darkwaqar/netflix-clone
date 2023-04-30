import { FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import HomeCategory from "../components/HomeCategory";
import { Category } from "../src/models";
import { Text, View } from "../components/Themed";

const HomeScreen = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      setCategories(await DataStore.query(Category));
      // const data = await DataStore.query(Category);
      // console.log(data);
    };
    fetchCategories().catch((err) => console.log(err));
  }, []);
  return (
    <View style={styles.container}>
      {/* List of categories */}
      <FlatList
        data={categories}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({ container: { flex: 1 } });
