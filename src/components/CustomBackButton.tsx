import { Ionicons } from "@expo/vector-icons";

import React from "react";
import { GestureResponderEvent, TouchableOpacity, Text } from "react-native";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
};

const CustomBackButton: React.FC<Props> = ({ onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{ flexDirection: "row", alignItems: "center" }}
  >
    <Ionicons name="chevron-back" size={28} color="black" />
    <Text className="text-[20px]">Back</Text>
  </TouchableOpacity>
);

export default CustomBackButton;
