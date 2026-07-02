import { IUserCredentials } from "@/domain/entities/user";
import { signUpSchema } from "@/schemas/auth-schema";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import * as actions from "../store/actions";
import { isSignUpInProgress } from "../store/selectors";

export interface SignUpForm {
  email: string;
  password: string;
  passwordConfirm: string;
}

export function useSignUp() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(isSignUpInProgress);

  function goToSignIn() {
    router.push("/sign-in");
  }

  async function signUp(credentials: IUserCredentials) {
    try {
      const result = await dispatch(actions.signUp(credentials));

      if (actions.signUp.fulfilled.match(result)) {
        router.replace("/(tabs)");
      }
    } catch (error) {
      console.log("Sign Up Error:", error);
    }
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return {
    signUp,
    loading,
    goToSignIn,
    control,
    handleSubmit,
    errors,
  };
}
