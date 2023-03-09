import { View, Text, TextInput, Touchable, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Home</Text>
      <Text style={styles.eventDate}>Home</Text>
      <View style={styles.form}>
      <TextInput 
      style={styles.input}
      placeholder='Nome do participante'
      placeholderTextColor='#6b6b6b'
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={() => {}}
      >
        <Text style={styles.buttonText}>
          +
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}