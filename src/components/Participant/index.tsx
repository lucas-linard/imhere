import { View, Text } from "react-native";

import { styles } from "./styles";

import { Button } from "../Button";

type Props = { 
    name?: string,
    onRemove?: () => void
}

export function Participant({ name, onRemove} : Props) {

return(
    <View style={styles.container}>
        <Text style={styles.name} >{name}</Text>
        <Button title='-' onPress={onRemove} style={styles.button} />
    </View>
)

}