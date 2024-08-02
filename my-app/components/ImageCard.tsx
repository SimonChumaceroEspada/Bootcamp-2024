import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

interface Props {
  id: number;
  name: string;
}

function getImageUrl(id: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

function ImageCard({ id, name }: Props) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: getImageUrl(id) }} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: "center",

  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 20,
  },
});

export default ImageCard;
