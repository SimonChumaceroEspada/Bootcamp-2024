import { Image, StyleSheet, Text, View } from "react-native";

interface PokemonNameProps {
    name: string;
    id: number;
}

function formatId(id: number): string {
    if (id < 10) {
        return `00${id}`;
    } else if (id < 100) {
        return `0${id}`;
    } else {
        return `${id}`;
    }
}

function PokemonName({ name,id }: PokemonNameProps) {
    return (
    <View>
        <Text style={styles.text}>#{formatId(id)}</Text>
        <Text style={styles.text}>{name}</Text>
    </View>
);

}

const styles = StyleSheet.create({
    text: {
        fontSize: 26,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
});

export default PokemonName;