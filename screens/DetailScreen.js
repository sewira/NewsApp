import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Linking,
  ScrollView,
  Image,
} from "react-native";

const DetailScreen = ({ route, navigation }) => {
  const {
    title,
    urlToImage,
    author,
    content,
    url,
    description,
    publishedAt,
  } = route.params;
  return (
    <View style={{ backgroundColor: "#323842", flex: 1 }}>
      <ScrollView>
        <View style={{ marginHorizontal: 15, marginTop: 15 }}>
          <Text style={{ fontSize: 30, color: "white" }}>{title}</Text>
          <Text style={{ color: "white" }}>{publishedAt}</Text>
          <Image
            style={{ width: "100%", height: 250, marginVertical: 15 }}
            source={{
              uri: urlToImage,
            }}
          />
          <Text style={{ color: "white", fontSize: 20 }}>
            Ditulis oleh: {author}
          </Text>
          <Text style={{ color: "white", fontSize: 20, marginVertical: 10 }}>
            {content}
          </Text>
          <Text style={{ color: "white", fontSize: 20 }}>{description}</Text>
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: "#9da5b4",
              borderRadius: 15,
              marginVertical: 20,
            }}
          >
            <Text
              style={{ color: "black", fontSize: 25, textAlign: "center" }}
              onPress={() => Linking.openURL(url)}
            >
              Kunjungin Website
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
