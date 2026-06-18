import Button from "@/components/ui/button";
import { InputControl } from "@/components/ui/input-control";
import { View } from "react-native";
import CredentialsFooter from "../components/credentials-footer";
import CredentialsHeader from "../components/credentials-header";
import { useSignIn } from "../hooks/useSignIn";

export function SignInScreen() {
  const { signIn, loading, goToSignUp, control, handleSubmit, errors } =
    useSignIn();

  return (
    <View>
      <CredentialsHeader />

      <View style={{ gap: 20 }}>
        <InputControl
          label="Email"
          placeholder="john.doe@mail.com"
          autoCapitalize="none"
          control={control}
          error={errors["email"]}
          name="email"
        />

        <InputControl
          label="Password"
          placeholder="******"
          autoCapitalize="none"
          secureTextEntry
          control={control}
          error={errors["password"]}
          name="password"
        />
      </View>

      <Button text="Entrar" onPress={handleSubmit(signIn)} />

      <CredentialsFooter
        onPress={goToSignUp}
        title="Não tem uma conta?"
        buttonLabel="Cadastre-se"
      />
    </View>
  );
}
