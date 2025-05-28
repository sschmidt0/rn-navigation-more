import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

const RootLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="new-quote"
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerStyle: { backgroundColor: "#ff8964" },
            contentStyle: { backgroundColor: "#ff8964" },
            headerBackTitle: "Tornar",
            headerTintColor: "#fff",
            title: "New Quote",
          }}
        />
      </Stack>
      <StatusBar barStyle={"dark-content"} />
    </>
  );
};

export default RootLayout;
