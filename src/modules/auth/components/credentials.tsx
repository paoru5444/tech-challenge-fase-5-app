import { View } from "react-native";
import { CredentialTextField } from "./credentials-text-field";

export function Credentials({ fields }) {
  return (
    <View>
      {fields.map((item) => (
        <CredentialTextField
          label={item.label}
          placeholder={item.placeholder}
        />
      ))}
    </View>
  );
}
