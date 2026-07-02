import { SignInForm } from "@/modules/auth/hooks/useSignIn";
import { SignUpForm } from "@/modules/auth/hooks/useSignUp";
import { Control, Controller } from "react-hook-form";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
  control?: Control<SignInForm | SignUpForm>;
  error?: {
    message?: string;
  } | null;
  name?: any;
  disablePaddingVertical?: boolean;
}

export function InputControl({
  children,
  style,
  value,
  label,
  placeholder,
  onChangeText,
  autoCapitalize,
  secureTextEntry,
  control,
  error,
  name = "",
  disablePaddingVertical,
  ...rest
}: InputProps) {
  return (
    <View
      style={{
        gap: 8,
        paddingVertical: disablePaddingVertical ? 0 : 16,
        borderRadius: 15,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 32,
      }}
    >
      {label && <Text style={styles.label}>{label}</Text>}

      <Controller
        control={control}
        name={name}
        defaultValue={""}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            style={[styles.input, { backgroundColor: "#fff" }]}
            {...rest}
          />
        )}
      />

      {error && <Text style={styles.errorMessage}>* {error?.message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#EAEAEA",
  },
  label: {
    fontSize: 14,
    fontWeight: 400,
  },
  errorMessage: {
    color: "red",
  },
});
