import React from "react";
import { Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const AboutScreen = () => {
  const size = 50;
  return (
    <View style={{ flex: 1, backgroundColor: "#323842" }}>
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 20,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/gon.jpg")}
            style={{ borderRadius: 120 }}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 30,
              marginTop: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Nama : </Text>
            <Text style={{ color: "white", fontSize: 20 }}>Dian Wijaya </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 30,
              marginTop: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Alamat : </Text>
            <Text style={{ color: "white", fontSize: 20 }}>Bekasi </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
              Contact me :
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingHorizontal: 20,
                paddingVertical: 50,
              }}
            >
              <AntDesign name="twitter" size={size} color="white" />
              <AntDesign name="github" size={size} color="white" />
              <AntDesign name="facebook-square" size={size} color="white" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AboutScreen;
