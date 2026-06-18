import { IUserCredentials } from "../../entities/user";
import { IUserRepository } from "../../repositories/user/user-repository";

export class SignIn {
  constructor(private repository: IUserRepository) {}

  async execute(credentials: IUserCredentials) {
    return await this.repository.signIn(credentials);
  }
}
