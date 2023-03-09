import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

export function Button(props: { onPress?: () => void , title?: string, style?: object}) {
  return (
    <TouchableOpacity style={[styles.button, props.style]} onPress={() => props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}
