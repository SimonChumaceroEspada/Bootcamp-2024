
import { Text, View, StyleSheet } from "react-native";

type PokemonTypeProps = {
  types: string[];
};

function PokemonType({ types }: PokemonTypeProps) {
  return (
    <View style={styles.textContainer}>
      {types.map((type) => (
        <Text key={type} style={styles.text}>{type}</Text>
      ))}
    </View>
  );
}


const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },

    textContainer: {
        marginTop: 20,
    },
});

export default PokemonType;