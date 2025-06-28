import { StyleSheet, Text, View } from "react-native";

export default function Login(){
    return(
        <View style={styles.main}>
            <Text>Login Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "pink"
    }
})