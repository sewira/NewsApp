import React, { createContext, useReducer } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import SearchScreen from "./screens/SearchScreen";
import AboutScreen from "./screens/AboutScreen";
import LoginScreen from "./screens/LoginScreen";

import { newsReducer, initialState } from "./Context/NewsReducer";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// export const GlobalContext = createContext();

function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Search") {
            iconName = "search1";
          } else if (route.name === "About") {
            iconName = "profile";
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "salmon",
        inactiveTintColor: "gray",
        style: {
          backgroundColor: "#323842",
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  // const [state, dispatch] = useReducer(newsReducer, initialState);
  return (
    // <GlobalContext.Provider value={(state, dispatch)}>
    //   <GlobalContext.Consumer>
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Login">
        <Stack.Screen name="TabHome" component={MyTab} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    //   </GlobalContext.Consumer>
    // </GlobalContext.Provider>
  );
}
