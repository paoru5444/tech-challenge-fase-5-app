import { FirebaseAuth } from "@/services/firebase-auth";
import { IUserRepository } from "../../domain/repositories/user-repository";
import { IUser, IUserCredentials } from "../../entities/user";

export class UserRepositoryImpl implements IUserRepository {
  constructor(private remote: FirebaseAuth) {}

  async signIn(credentials: IUserCredentials): Promise<IUser> {
    return await this.remote.signIn(credentials);
  }

  async signUp(credentials: IUserCredentials): Promise<IUser> {
    return await this.remote.signUp(credentials);
  }

  async logout(): Promise<void> {
    await this.remote.logout();
  }
}
