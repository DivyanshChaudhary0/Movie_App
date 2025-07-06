import { Tabs } from "expo-router";

export default function LoginLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="login" options={{ title: "Login" }} />
      <Tabs.Screen name="signUp" options={{ title: "Sign Up" }} />
    </Tabs>
  );
}
