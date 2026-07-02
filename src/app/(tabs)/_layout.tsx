import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="setup"
        options={{
          title: "Preferências",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
