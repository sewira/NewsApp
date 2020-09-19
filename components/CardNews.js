import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const CardNews = ({ title, description, image }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#9da5b4",
          padding: 15,
          borderRadius: 15,
          flex: 1,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            padding: 5,
            borderRadius: 10,
            backgroundColor: "#3f4451",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            {title}
          </Text>
        </View>

        <Image
          style={{ width: "100%", height: 250, marginVertical: 15 }}
          source={{
            uri: image,
          }}
        />
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginHorizontal: 20,
  },
});

export default CardNews;
