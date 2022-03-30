import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

import dataApi from "../api/data";
import color from "../config/colors";

function WeatherWidget(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await dataApi.getData();
    console.log(res.data);
    setData(res.data);
  };

  if (Object.keys(data).length === 0) return null;

  const { current } = data;

  console.log(current);

  return (
    <View style={styles.widgetContainer}>
      <Text style={styles.text}>{current.weather[0].description}</Text>
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{current.feels_like.day}</Text>
          {/* <Text style={styles.description}>{main.humidity}</Text>
          <Text style={styles.description}>{main.temp_max}</Text>
          <Text style={styles.description}>{main.temp_min}</Text>
          <Text style={styles.description}>{main.temp}</Text> */}
        </View>
      </View>
    </View>
  );
}

export default WeatherWidget;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    marginTop: 6,
    backgroundColor: "transparent",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 6,
    marginLeft: 6,
  },
  subtitle: {
    fontSize: 12,
    textDecorationStyle: "dotted",
    overflow: "hidden",
    fontWeight: "bold",
  },

  text: {
    fontSize: 14,
    fontWeight: "700",
    marginLeft: 6,
  },
  textWrapper: {
    width: "70%",
    height: "100%",
    display: "flex",
    overflow: "hidden",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    overflow: "hidden",
    color: "grey",
    marginBottom: 3,
    textTransform: "uppercase",
  },
  widgetContainer: {
    height: "auto",
    width: "90%",
    display: "flex",
    backgroundColor: color.white,
    borderRadius: 12,
    padding: 10,
  },
});
