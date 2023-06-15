import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { HomeScreen } from "./screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
