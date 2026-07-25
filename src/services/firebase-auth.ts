import { IUser, IUserCredentials } from "@/domain/entities/user";
import { auth, db } from "@/firebase/config";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function toSerializableUser(user: User, age?: number): IUser {
  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    emailVerified: user.emailVerified,
    phoneNumber: user.phoneNumber,
    isAnonymous: user.isAnonymous,
    providerId: user.providerId,
    tenantId: user.tenantId,
    age,
  };
}

export class FirebaseAuth {
  async signIn({ email, password }: IUserCredentials): Promise<IUser> {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return toSerializableUser(res.user);
  }

  async signUp({ email, password, name, age }: IUserCredentials) {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    if (name) {
      await updateProfile(res.user, { displayName: name });
    }

    await setDoc(doc(db, "users", res.user.uid), { age }, { merge: true });
    return { ...toSerializableUser(res.user, age), displayName: name ?? null };
  }

  async logout() {
    await auth.signOut();
  }
}
