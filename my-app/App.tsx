import { FlatList, StyleSheet, Text, View } from 'react-native';
import PokemonCard from './components/Card';
import { usePokemon } from './hooks/pokemonHook';

export default function App() {
  const { pokemons, loading, loadMore } = usePokemon();
  console.log(pokemons);

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PokemonCard id={item.id} name={item.name} types={item.types} />
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <Text>Loading...</Text> : null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});