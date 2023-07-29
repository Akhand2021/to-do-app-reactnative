import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Homepage } from "./src/screen";

export default function App() {
  let [fontLoaded] = useFonts({
    Montserrat_semibold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });
  if (!fontLoaded) {
    return <View></View>;
  } else {
    return <Homepage />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
