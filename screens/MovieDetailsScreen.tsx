import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  Image,
  Pressable,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import {
  MaterialIcons,
  Entypo,
  AntDesign,
  Ionicons,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";
import { DataStore } from "aws-amplify";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, View } from "../components/Themed";
import { Movie, Season, Episode } from "../src/models";

// import movie from "../assets/data/movie";
import EpisodeItem from "../components/EpisodeItem";
import VideoPlayer from "../components/VideoPlayer";

import ModalDropdown from "react-native-modal-dropdown";

// const firstSeason = movie.seasons.items[0];
// const firstEpisode = firstSeason.episodes.items[0];

const MovieDetailsScreen = () => {
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  const [currentSeason, setCurrentSeason] = useState<Season | undefined>(
    undefined
  );
  const [currentEpisode, setCurrentEpisode] = useState<Episode | undefined>(
    undefined
  );

  const seasonNames = seasons ? seasons.map((season) => season.name) : [];

  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchMovie = async () => {
      setMovie(await DataStore.query(Movie, route?.params?.id));
    };
    fetchMovie();
  }, []);

  useEffect(() => {
    if (!movie) {
      return;
    }
    const fetchSeasons = async () => {
      const movieSeasons = (await DataStore.query(Season)).filter(
        (s) => s.movieID == movie.id
      );
      setSeasons(movieSeasons);
      setCurrentSeason(movieSeasons[0]);
    };
    fetchSeasons();
  }, [movie]);

  useEffect(() => {
    if (!currentSeason) {
      return;
    }
    const fetchEpisodes = async () => {
      const seasonEpisode = (await DataStore.query(Episode)).filter(
        (e) => e?.seasonID === currentSeason?.id
      );
      console.log(await DataStore.query(Episode));
      setEpisodes(seasonEpisode);
      setCurrentEpisode(seasonEpisode[0]);
    };

    fetchEpisodes();
  }, [currentSeason]);

  console.log("currentSeason", currentSeason?.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: movie?.title,
    });
  }, [navigation, movie]);

  if (!movie) {
    return <ActivityIndicator />;
  }
  return (
    <View>
      {currentEpisode && <VideoPlayer episode={currentEpisode} />}
      <FlatList
        data={episodes}
        renderItem={({ item }) => (
          <EpisodeItem episode={item} onPress={setCurrentEpisode} />
        )}
        style={{ marginBottom: 220 }}
        ListHeaderComponent={
          <View style={{ padding: 12 }}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.match}>98% match</Text>
              <Text style={styles.year}>{movie.year}</Text>
              <View style={styles.ageContainer}>
                <Text style={styles.age}>12+</Text>
              </View>
              <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
              <MaterialIcons name="hd" size={24} color="white" />
            </View>

            {/* Play Button */}
            <Pressable
              onPress={() => {
                console.warn("Play");
              }}
              style={[styles.playButton, { backgroundColor: "#e6b800" }]}
            >
              <Text style={styles.playButtonText}>
                <Entypo name="controller-play" size={16} color="black" />
                Play
              </Text>
            </Pressable>

            {/* Download Button */}
            <Pressable
              onPress={() => {
                console.warn("Download");
              }}
              style={styles.downloadButton}
            >
              <Text style={styles.downloadButtonText}>
                <AntDesign name="download" size={16} color="white" /> Download
              </Text>
            </Pressable>

            <Text style={{ marginVertical: 10 }}>{movie.plot}</Text>
            <Text style={styles.year}>Cast: {movie.cast}</Text>
            <Text style={styles.year}>Creator: {movie.creator}</Text>

            {/* Row with icon buttons */}
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ alignItems: "center", marginRight: 20 }}>
                <AntDesign name="plus" size={24} color={"black"} />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>My List</Text>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <Feather name="thumbs-up" size={24} color="black" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Rate</Text>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <FontAwesome name="send-o" size={24} color="black" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Share</Text>
              </View>
            </View>
            <View style={{ backgroundColor: "white" }}>
              {currentSeason && (
                <ModalDropdown
                  options={[...seasonNames]}
                  defaultValue={currentSeason.name}
                  onSelect={(index, value) => {
                    setCurrentSeason(seasons[index]);
                  }}
                  dropdownStyle={{ height: 100 }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 20,
                    }}
                  >
                    <Text>{currentSeason.name}</Text>
                    <MaterialIcons
                      name="arrow-drop-down"
                      size={24}
                      color="black"
                    />
                  </View>
                </ModalDropdown>

                // <Picker
                //   selectedValue={currentSeason.name}
                //   onValueChange={(itemValue, itemIndex) => {
                //     setCurrentSeason(seasons[itemIndex]);
                //   }}
                //   prompt="hello"
                //   style={{ color: "white", width: 200 }}
                //   itemStyle={{ backgroundColor: "white" }}
                //   dropdownIconColor={"white"}
                // >
                //   {seasonNames.map((seasonName) => (
                //     <Picker.Item
                //       label={seasonName}
                //       value={seasonName}
                //       key={seasonName}
                //     />
                //   ))}
                // </Picker>
              )}
            </View>
          </View>
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  match: {
    color: "#59d467",
    fontWeight: "bold",
    marginRight: 5,
  },
  year: {
    color: "#757575",
    marginRight: 5,
  },
  ageContainer: {
    backgroundColor: "#e6e229",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    paddingHorizontal: 3,
    marginRight: 5,
  },
  age: {
    color: "black",
    fontWeight: "bold",
  },

  // Button
  playButton: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
  },
  playButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    borderColor: "black",
    border: 1,
  },
  downloadButton: {
    backgroundColor: "#2b2b2b",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
  },
  downloadButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
