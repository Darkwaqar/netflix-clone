import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Category, Movie } from "../src/models";
import { DataStore } from "aws-amplify";
import MovieItem from "./MovieItem";

interface HomeCategoryProps {
  category: Category;
}
const HomeCategory = (props: HomeCategoryProps) => {
  const { category } = props;
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const result = (await DataStore.query(Movie)).filter(
        (movie) => movie.categoryID === category.id
      );
      setMovies(result);
    };

    fetchMovies();
  }, []);
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieItem movie={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default HomeCategory;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
