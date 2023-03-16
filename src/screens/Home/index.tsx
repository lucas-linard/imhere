import { useState } from "react";
import { View, Text, TextInput, Alert, FlatList } from "react-native";

import { Participant } from "../../components/Participant";
import { Button } from "../../components/Button";

import { styles } from "./styles";

export default function Home() {
  const [participants, setParticipant] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd(name: string) {
    if(participants.includes(name)) {
     return Alert.alert("Participante já cadastrado", "Este participante já está cadastrado"  );
    }
    setParticipant(prevState => [...prevState, name])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover participante", `Deseja remover ${name} da lista?`, [
      { text: "Não", style:"cancel" ,onPress: () => {} },
      { text: "Sim", onPress: () => {setParticipant(prevState => prevState.filter(p => p !== name))} },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Home</Text>
      <Text style={styles.eventDate}>Home</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          value={participantName}
          onChangeText={(text) => setParticipantName(text)}
        />
        <Button title="+" onPress={() => handleParticipantAdd(participantName)} />
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
        )}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Nenhum participante</Text>
        )}
      ></FlatList>
    </View>
  );
}
