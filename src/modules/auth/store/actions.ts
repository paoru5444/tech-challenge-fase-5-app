import { IUserCredentials } from "@/domain/entities/user";
import { container } from "@/providers/user-provider";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (credentials: IUserCredentials) => {
    return await container.signIn.execute(credentials);
  },
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (crendentials: IUserCredentials) => {
    return await container.signUp.execute(crendentials);
  },
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await container.logout.execute();
});
