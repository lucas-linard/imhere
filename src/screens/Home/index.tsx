import { View, Text, TextInput } from "react-native";

import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Home</Text>
      <Text style={styles.eventDate}>Home</Text>
      <TextInput 
      style={styles.input}
      placeholder='Nome do participante'
      placeholderTextColor='#6b6b6b'
      />
    </View>
  );
}