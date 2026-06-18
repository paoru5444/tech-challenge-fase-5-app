import { Text, TextInput, View } from "react-native";

export function CredentialTextField({ label, value, onChange, placeholder }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
      />
      
    </View>
  );
}
