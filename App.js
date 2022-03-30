import { ImageBackground, StyleSheet } from "react-native";
import WeatherWidget from "./app/screens/WeatherWidget";

export default function App() {
  return (
    <ImageBackground
      source={require("./app/assets/background.jpg")}
      resizeMode="cover"
      style={styles.imageBg}
      blurRadius={10}
    >
      <WeatherWidget />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});
