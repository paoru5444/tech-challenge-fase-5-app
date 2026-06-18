import Button from "@/components/ui/button";
import { InputControl } from "@/components/ui/input-control";
import { View } from "react-native";
import CredentialsFooter from "../components/credentials-footer";
import CredentialsHeader from "../components/credentials-header";
import { useSignUp } from "../hooks/useSignUp";

export function SignUpScreen() {
  const { signUp, loading, goToSignIn, control, handleSubmit, errors } =
    useSignUp();

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

        <InputControl
          label="Confirm Password"
          placeholder="******"
          autoCapitalize="none"
          secureTextEntry
          control={control}
          error={errors["passwordConfirm"]}
          name="passwordConfirm"
        />
      </View>

      <Button text="Cadastre-se" onPress={handleSubmit(signUp)} />

      <CredentialsFooter
        onPress={goToSignIn}
        title="Já tem uma conta?"
        buttonLabel="Fazer login"
      />
    </View>
  );
}
