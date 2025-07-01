    import { useState } from "react";
    import {
    Button,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    } from "react-native";

    export default function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = () => {
        console.log("Form Updated");
    };

    return (
        <KeyboardAvoidingView  style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView contentContainerStyle={styles.main}>
            <Text>Name</Text>
            <TextInput
            value={name}
            placeholder="Enter your name"
            onChangeText={setName}
            style={styles.input}
            />

            <Text>Email</Text>
            <TextInput
            value={email}
            placeholder="Enter your email"
            onChangeText={setEmail}
            style={styles.input}
            />

            <Text>Password</Text>
            <TextInput
            value={password}
            placeholder="Enter password"
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry={true}
            />

            <Text>Confirm Password</Text>
            <TextInput
            value={confirmPassword}
            placeholder="Confirm Password"
            onChangeText={setConfirmPassword}
            style={styles.input}
            secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
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
