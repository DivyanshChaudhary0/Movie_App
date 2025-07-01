import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.main}>
        <Text style={{ color: "white", fontSize: 20 }}>
            Bhola Chaudhary App
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  btn: {
    color: "white",
    fontSize: 20,
    padding: 10,
    backgroundColor: "pink",
    borderRadius: 10,
    marginTop: 8
  },
});
