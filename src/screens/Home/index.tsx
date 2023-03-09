import { View, Text, TextInput, ScrollView, FlatList } from "react-native";

import { Participant } from "../../components/Participant";
import { Button } from "../../components/Button";

import { styles } from "./styles";

export default function Home() {
  const participants = ["Lucas", "Jorge", "Matias", "Felipe",'Julia','Isadora','Ana','Sarah'];
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Home</Text>
      <Text style={styles.eventDate}>Home</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <Button title="+" onPress={() => {}} />
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant name={item} onRemove={() => {}} />
        )}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Nenhum participante</Text>
        )}
      ></FlatList>
    </View>
  );
}
