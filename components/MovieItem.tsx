import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Movie } from "../src/models";
import { useNavigation } from "@react-navigation/native";
import { Storage } from "aws-amplify";

const MovieItem = ({ movie }: { movie: Movie }) => {
  const navigation = useNavigation();
  const [imageUrl, setImageUrl] = useState("");

  const onMoviePress = () => {
    navigation.navigate("MovieDetailsScreen", { id: movie.id });
  };

  useEffect(() => {
    if (movie.poster.startsWith("http")) {
      setImageUrl(movie.poster);
      return;
    }

    Storage.get(movie.poster).then(setImageUrl);
  }, []);
  return (
    <Pressable onPress={onMoviePress}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
    </Pressable>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 170,
    resizeMode: "cover",
    borderRadius: 5,
    margin: 5,
  },
});
