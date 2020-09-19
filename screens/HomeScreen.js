import React, { useState, useEffect, useContext } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";

import CardNews from "../components/CardNews";

const HomeScreen = ({ navigation }) => {
  const API_KEY = "6f285cfe57e9493bb6d2dcc7dab9d52e";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNews = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=id&apiKey=${API_KEY}`
    );
    const data = await response.json();
    setData(data.articles);
    setLoading(false);
  };

  useEffect(() => {
    getNews();

    return () => {};
  }, []);

  const renderItem = ({ item }) => {
    const {
      title,
      urlToImage,
      author,
      content,
      description,
      url,
      publishedAt,
    } = item;
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Detail", {
            title,
            urlToImage,
            author,
            content,
            url,
            description,
            publishedAt,
          })
        }
      >
        <CardNews title={title} image={urlToImage} description={description} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#323842" />
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Top Headlines</Text>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          style={{ marginTop: 25 }}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          onRefresh={() => getNews()}
          refreshing={loading}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#323842",
    flex: 1,
  },

  header: {
    width: "100%",
    height: 45,
    backgroundColor: "#9da5b4",
  },
  txtHeader: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default HomeScreen;
