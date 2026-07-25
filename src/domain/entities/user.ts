export interface IUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  emailVerified: boolean;
  phoneNumber: string | null;
  isAnonymous: boolean;
  providerId: string;
  tenantId: string | null;
  age?: number;
}

export interface IUserCredentials {
  name?: string;
  email: string;
  password: string;
  passwordConfirm?: string;
  age?: number;
}

export function validatePassword({
  password,
  passwordConfirm,
}: IUserCredentials) {
  return password === passwordConfirm;
}
