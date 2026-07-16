import Button from "@/components/ui/button";
import { InputControl } from "@/components/ui/input-control";
import Typography from "@/components/ui/typography";
import { ScrollView, View } from "react-native";
import CredentialsFooter from "../components/credentials-footer";
import CredentialsHeader from "../components/credentials-header";
import { useSignIn } from "../hooks/useSignIn";

export function SignInScreen() {
  const { signIn, loading, goToSignUp, control, handleSubmit, errors } =
    useSignIn();

  return (
    <ScrollView contentContainerStyle={{ gap: 32 }}>
      <CredentialsHeader />

      <View style={{ paddingHorizontal: 16 }}>
        <Typography variant="h1">Seja bem vindo!</Typography>
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
      </View>

      <View style={{ paddingHorizontal: 16 }}>
        <Button text="Entrar" onPress={handleSubmit(signIn)} />
      </View>

      <CredentialsFooter
        onPress={goToSignUp}
        title="Não tem uma conta?"
        buttonLabel="Cadastre-se"
      />
    </ScrollView>
  );
}
