import { useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { Text, TextInput } from "react-native-paper";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    console.log("Form Updated");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.formContainer}>
          <TextInput
            label={"Username"}
            value={name}
            placeholder="Enter your username"
            onChangeText={setName}
            mode="outlined"
            style={{ width: 280, marginBottom: 16 }}
          />

          <TextInput
            label={"Email"}
            value={email}
            placeholder="Enter your email"
            onChangeText={setEmail}
            mode="outlined"
            style={{ width: 280, marginBottom: 16 }}
          />

          <TextInput
            label={"password"}
            value={password}
            placeholder="Enter password"
            onChangeText={setPassword}
            secureTextEntry={true}
            mode="outlined"
            style={{ width: 280, marginBottom: 16 }}
          />

          <TextInput
            label={"Confirm Password"}
            value={confirmPassword}
            placeholder="Confirm Password"
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
            mode="outlined"
            style={{ width: 280, marginBottom: 16 }}
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
    gap: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  input: {
    width: 280,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 2,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#6200ee",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
