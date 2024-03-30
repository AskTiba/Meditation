import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import React from "react";
import Button from "../components/Button";
import { router } from "expo-router";

const RootIndex = () => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/images/medi.png")}
        resizeMode="cover"
        className="justify-center items-center h-full"
      >
        <View className="flex justify-center items-center mt-96">
          <Text className="text-[20px] text-[#32cd32]">WELCOME</Text>
          <Text className="text-[17px] text-[#32cd32]">
            Do meditation, stay focused.
          </Text>
          <Text className="text-[17px] text-[#32cd32]">
            Live a healthy life.
          </Text>
        </View>
        <View className="mt-20">
          <Button
            title="Login with email"
            onPress={() => {
              router.push("/screens/Login");
            }}
          />
        </View>
        <View className="mt-5 flex-row">
          <Text className="text-white">Do you have an account?</Text>
          <TouchableOpacity
            className="mx-2"
            onPress={() => {
              router.push("/screens/SignUp");
            }}
          >
            <Text className="text-white">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RootIndex;
