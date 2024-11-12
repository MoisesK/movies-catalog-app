import React, {useState, useEffect} from "react";
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';

import MovieApi from "./src/Services/MovieApi";
import Movie from "./src/Components/Movie";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMovies() {
      const response = await MovieApi.get('?api=filmes')
      setMovies(response.data);
      setLoading(false);
    }

    getMovies();
  }, []);

  return (loading ?
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color={'black'} size={40} />
        <Text>Carregando..</Text>
      </View>

      :
    <View style={styles.container}>
      <FlatList
          showsVerticalScrollIndicator={false}
          data={movies}
          renderItem={ ({ item }) => {
            return <Movie data={item}
        />
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
});
