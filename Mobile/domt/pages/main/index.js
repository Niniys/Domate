import * as React from "react";
import { View, TouchableOpacity, Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
// import style from "./style.js";
import Icon from "react-native-vector-icons/Entypo";

import Anote from "../anot";
import Timer from "../timer";

function Principal({ state, descriptors, navigation }) {
  let selected = state.index;
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let arrColor = ["#511845", "#a93190"];
        let icon = (
          <Icon
            name="open-book"
            color={selected == index ? "#000" : "#000"}
            size={35}
          />
        );
        if (index == 1) {
          arrColor = ["#a93190", "#511845"];
          icon = (
            <Icon
              name="stopwatch"
              color={selected == index ? "#000" : "#000"}
              size={35}
            />
          );
        } 
        // else if (index == 2) {
        //   arrColor = ["#511845", "#A73790"];
        //   icon = (
        //     <Icon
        //       name="user"
        //       color={selected == index ? "#FAD2D2" : "#000"}
        //       size={26}
        //     />
        //   );
        // }
          
        return (
          <View key={index} style={{ flex: 1, height: 60, width: "100%" }}>
            <LinearGradient
              start={{ x: 0, y: 0.75 }}
              end={{ x: 1, y: 0.25 }}
              colors={arrColor}
              style={{ flex: 1, height: 40, width: "100%" }}
            >
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {icon}
              </TouchableOpacity>
            </LinearGradient>
          </View>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <StatusBar hidden style="light" translucent={false} />
      <Tab.Navigator
        tabBar={(props) => <Principal {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: "#511845",
          },
          headerShown: false,
        }}
      >
        <Tab.Screen name="Anote" component={Anote} />

        <Tab.Screen name="Timer" component={Timer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
