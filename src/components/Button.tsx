import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

const Button = (props) => {
  const isLoading = props.isLoading || false;
  return (
    <TouchableOpacity
      className="px-24 py-2 border border-[#ffd700] justify-center items-center rounded-lg bg-[#32cd32]"
      onPress={props.onPress}
      disabled={isLoading}
    >
      {isLoading && isLoading == true ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text className="text-[18px]">{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
