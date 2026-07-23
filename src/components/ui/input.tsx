import { useContrastColor } from "@/hooks/useContrastColor";
import { useSpacing } from "@/hooks/useSpacing";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import Typography from "./typography";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string | null;
}

export default function Input({
  label,
  error,
  style,
  value,
  onChangeText,
  placeholder,
  autoCapitalize,
  secureTextEntry,
  ...rest
}: InputProps) {
  const borderColor = useContrastColor("#EAEAEA", "#000000");
  const spacing = useSpacing();

  return (
    <View style={{ gap: spacing(8) }}>
      {label && <Typography variant="label">{label}</Typography>}

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        style={[
          styles.input,
          { backgroundColor: "#fff", borderColor, paddingHorizontal: spacing(16) },
          style,
        ]}
        {...rest}
      />

      {error && (
        <Typography variant="caption" style={{ color: "#F05069" }}>
          * {error}
        </Typography>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
  },
});
