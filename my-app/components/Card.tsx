import { ImageBackground, StyleSheet, Text, View } from "react-native";
import ImageCard from "./ImageCard";
import PokemonName from "./PokemonName";
import PokemonType from "./PokemonType";

type Props = {
  id: number;
  name: string;
  types: string[];
};

function PokemonCard({ id, name, types }: Props) {
  return (
    <ImageBackground
      source={{
        uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c1cfff2-db8d-44cd-8a13-cb2a4162fae6/dd2zouo-047f7b3f-b895-43ac-82a4-abb6ca12c52a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjMWNmZmYyLWRiOGQtNDRjZC04YTEzLWNiMmE0MTYyZmFlNlwvZGQyem91by0wNDdmN2IzZi1iODk1LTQzYWMtODJhNC1hYmI2Y2ExMmM1MmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EFI6YQ0acRLpYHzupMAxV_N4KMcpNWT-_3RJ4TV-4eU",
      }}
      style={styles.card}
    >
      <View style={styles.infoContainer}>
        <PokemonName name={name} id={id}/>
        <PokemonType types={types} />
      </View>

      <ImageCard id={id} name={name} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    width: 350,
    height: 200,
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 20,
  },
  
  infoContainer: {
    backgroundColor: "white",
    alignItems: "center",
    width: 150,
    height: 200,
    justifyContent: "center",
  },
});

export default PokemonCard;
