import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import CardNews from "../components/CardNews";

const SearchScreen = ({ navigation }) => {
  const API_KEY = "6f285cfe57e9493bb6d2dcc7dab9d52e";

  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  console.log(data);

  const getNews = async (key) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${key}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    setData(data.articles);

    setValue("");
  };

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
    <View style={{ backgroundColor: "#323842", flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder="Cari Berita"
          onChangeText={(text) => setValue(text)}
          style={{
            borderWidth: 1,
            padding: 10,
            margin: 20,
            color: "white",
            fontSize: 15,
            width: "90%",
            borderColor: "white",
            position: "relative",
          }}
        />
        <EvilIcons
          name="search"
          size={30}
          color="white"
          style={{ position: "absolute", right: 40, bottom: 35 }}
          onPress={() => getNews(value)}
        />
      </View>
      <FlatList
        style={{ marginTop: 25 }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default SearchScreen;
