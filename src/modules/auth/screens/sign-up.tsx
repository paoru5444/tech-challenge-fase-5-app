import Button from "@/components/ui/button";
import { InputControl } from "@/components/ui/input-control";
import { ScrollView, Text, View } from "react-native";
import CredentialsFooter from "../components/credentials-footer";
import CredentialsHeader from "../components/credentials-header";
import { useSignUp } from "../hooks/useSignUp";

export function SignUpScreen() {
  const { signUp, loading, goToSignIn, control, handleSubmit, errors } =
    useSignUp();

  return (
    <ScrollView contentContainerStyle={{ gap: 32 }}>
      <CredentialsHeader />

      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "700", letterSpacing: -0.2 }}>
          Cadastre-se
        </Text>
      </View>

      <View style={{ paddingHorizontal: 16 }}>
        <InputControl
          label="Digite seu email"
          placeholder="john.doe@mail.com"
          autoCapitalize="none"
          control={control}
          error={errors["email"]}
          name="email"
        />

        <InputControl
          label="Digite sua senha"
          placeholder="✴︎✴︎✴︎✴︎✴︎✴︎✴︎✴︎✴︎"
          autoCapitalize="none"
          secureTextEntry
          control={control}
          error={errors["password"]}
          name="password"
        />

        <InputControl
          label="Confirme sua senha"
          placeholder="✴︎✴︎✴︎✴︎✴︎✴︎✴︎✴︎✴︎"
          autoCapitalize="none"
          secureTextEntry
          control={control}
          error={errors["passwordConfirm"]}
          name="passwordConfirm"
        />
      </View>

      <View style={{ paddingHorizontal: 16 }}>
        <Button text="Cadastre-se" onPress={handleSubmit(signUp)} />
      </View>

      <CredentialsFooter
        onPress={goToSignIn}
        title="Já tem uma conta?"
        buttonLabel="Fazer login"
      />
    </ScrollView>
  );
}
