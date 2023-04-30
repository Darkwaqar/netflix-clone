import { StyleSheet, Text, View } from "react-native";
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
    <View>
      <Text>MovieItem</Text>
    </View>
  );
};

export default MovieItem;

const styles = StyleSheet.create({});
