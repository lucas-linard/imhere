import { View, Text } from "react-native";

import { styles } from "./styles";

import { Button } from "../Button";

export function Participant() {

return(
    <View style={styles.container}>
        <Text style={styles.name} >Participant</Text>
        <Button title='-' onPress={() => {}} style={styles.button} />
    </View>
)

}