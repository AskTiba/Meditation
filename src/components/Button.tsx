import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

// Define the type for the props
type ButtonProps = {
  isLoading?: boolean; // Optional prop, default is false
  onPress: () => void; // Function prop
  title?: string; // Optional prop
};

const Button: React.FC<ButtonProps> = (props) => {
  const isLoading = props.isLoading || false;
  return (
    <TouchableOpacity
      className="px-24 py-2 border border-[#ffd700] justify-center items-center rounded-lg bg-[#32cd32]"
      onPress={props.onPress}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text className="text-[18px] text-white">{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
