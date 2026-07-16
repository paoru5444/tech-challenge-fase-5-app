import Button from "@/components/ui/button";
import { InputControl } from "@/components/ui/input-control";
import Typography from "@/components/ui/typography";
import { useSpacing } from "@/hooks/useSpacing";
import { ScrollView, View } from "react-native";
import CredentialsFooter from "../components/credentials-footer";
import CredentialsHeader from "../components/credentials-header";
import { useSignUp } from "../hooks/useSignUp";

export function SignUpScreen() {
  const { signUp, loading, goToSignIn, control, handleSubmit, errors } =
    useSignUp();
  const spacing = useSpacing();

  return (
    <ScrollView contentContainerStyle={{ gap: spacing(32) }}>
      <CredentialsHeader />

      <View style={{ paddingHorizontal: spacing(16) }}>
        <Typography variant="h1">Cadastre-se</Typography>
      </View>

      <View style={{ paddingHorizontal: spacing(16) }}>
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

      <View style={{ paddingHorizontal: spacing(16) }}>
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
