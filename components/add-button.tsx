import { useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const AddButton = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push("../new-quote");
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Ionicons size={26} color="#fff" name="add" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
