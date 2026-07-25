import { IUserCredentials } from "@/domain/entities/user";
import { signUpSchema } from "@/schemas/auth-schema";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import * as actions from "../store/actions";
import { isSignUpInProgress } from "../store/selectors";

export interface SignUpForm {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  age: string;
}

export function useSignUp() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(isSignUpInProgress);

  function goToSignIn() {
    router.push("/sign-in");
  }

  async function signUp(form: SignUpForm) {
    try {
      const credentials: IUserCredentials = { ...form, age: Number(form.age) };
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
      name: "",
      email: "",
      password: "",
      age: "",
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
