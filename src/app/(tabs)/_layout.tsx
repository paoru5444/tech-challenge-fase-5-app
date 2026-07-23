import Lucide from "@react-native-vector-icons/lucide";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Lucide name="home" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: "Tasks",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Lucide name="clock-check" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="setup"
        options={{
          title: "Configurações",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Lucide name="sliders" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Lucide name="user" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
