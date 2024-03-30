import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Button from "@/src/components/Button";

const SignUp = () => {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/images/medi-1.png")}
        resizeMode="cover"
        className="justify-center items-center h-full"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="mt-[490px] flex">
              <TextInput
                placeholder="Name"
                placeholderTextColor="white"
                className="mb-5 w-[350px] rounded-lg px-[10px] py-[7px] border border-[#ffd700] bg-[#32cd32] text-black"
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor="white"
                className="mb-5 w-[350px] rounded-lg px-[10px] py-[6px] border border-[#ffd700] bg-[#32cd32] text-black"
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="white"
                secureTextEntry
                className="mb-2 w-[350px] rounded-lg px-[10px] py-[6px] border border-[#ffd700] bg-[#32cd32] text-black"
              />
            </View>
            <View className="mt-10">
              <Button
                title="SIGNUP"
                onPress={() => {
                  // router.push("/screens/Login");
                }}
              />
            </View>
            <View className="mt-5 flex-row justify-center">
              <Text className="text-white">Already have an account?</Text>
              <TouchableOpacity
                className="mx-2"
                onPress={() => {
                  router.push("/screens/Login");
                }}
              >
                <Text className="text-white">Sign In</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default SignUp;
