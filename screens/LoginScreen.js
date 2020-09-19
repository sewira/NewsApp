import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons/";

const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("admin");
  const [password, setPassword] = useState("admin");
  const [reject, setReject] = useState(true);

  const loginHandler = () => {
    if (userName === "admin" && password === "admin") {
      setReject(false);
      navigation.navigate("TabHome");
    } else {
      setReject(true);
    }
  };

  return (
    <View style={{ backgroundColor: "#323842", flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={{ fontSize: 12, color: "#fff" }}>
          Sign up to countinue
        </Text>
      </View>
      <View style={styles.main}>
        <Text style={{ color: "#fff" }}>Email</Text>
        <View>
          <TextInput
            style={styles.textInput}
            keyboardType={"email-address"}
            onChangeText={(userName) => setUserName(userName)}
          />
        </View>

        <Text style={{ color: "#fff" }}>Password</Text>
        <View>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <View
          style={{ alignItems: "flex-end", fontSize: 12, marginBottom: 50 }}
        >
          <Text style={{ fontSize: 12, color: "#fff" }}>Forgot Password</Text>
        </View>

        <View style={{ padding: 10 }}>
          <Button
            title="masuk"
            color="#F77866"
            onPress={() => loginHandler()}
          />
        </View>
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: 12,
            marginVertical: 20,
          }}
        >
          -OR-
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View
            style={{
              marginRight: 20,
              borderWidth: 1,
              paddingVertical: 5,
              paddingHorizontal: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AntDesign
              name="facebook-square"
              size={16}
              color="white"
              style={{ marginRight: 10 }}
            />
            <Text style={{ color: "#fff" }}>Facebook</Text>
          </View>
          <View
            style={{
              marginRight: 20,
              borderWidth: 1,
              paddingVertical: 5,
              paddingHorizontal: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AntDesign
              name="google"
              size={16}
              color="white"
              style={{ marginRight: 10 }}
            />
            <Text style={{ color: "#fff" }}>Google</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 120,
    marginHorizontal: 22,
  },
  main: {
    marginHorizontal: 32,
    marginVertical: 37,
  },
  welcomeText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
  textInput: {
    borderBottomWidth: 3,
    borderBottomColor: "#fff",
    marginBottom: 20,
  },
});

export default LoginScreen;
