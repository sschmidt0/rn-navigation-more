import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        title: "Perfil",
        headerStyle: {
          backgroundColor: "#b3e5fc",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#03a9f4",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <Ionicons size={26} name="person" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Ajustes",
          tabBarIcon: ({ color }) => (
            <Ionicons size={26} name="settings" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
