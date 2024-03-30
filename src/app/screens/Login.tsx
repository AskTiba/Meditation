import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  ScrollView,
} from "react-native";
import Button from "@/src/components/Button";
import { router } from "expo-router";
import AuthContext from "@/src/providers/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  return (
    <View>
      <ImageBackground
        source={require("../../assets/images/medi-2.png")}
        resizeMode="cover"
        className="justify-center items-center h-full"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="mt-[520px] flex">
              <TextInput
                placeholder="Email"
                placeholderTextColor="white"
                className="mb-5 w-[350px] rounded-lg px-[10px] py-[7px] border border-[#ffd700] bg-[#32cd32] text-black"
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="white"
                secureTextEntry
                className="mb-2 w-[350px] rounded-lg px-[10px] py-[6px] border border-[#ffd700] bg-[#32cd32] text-black"
              />
              <TouchableOpacity
                onPress={() => {
                  // router.push("/screens/Login");
                }}
                className="items-center"
              >
                <Text className="text-white">Forgot password?</Text>
              </TouchableOpacity>
            </View>
            <View className="mt-10">
              <Button
                title="LOGIN"
                onPress={login}
              />
            </View>
            <View className="mt-5 flex-row justify-center">
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
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default Login;
