import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  UserCredential,
} from "firebase/auth";
import { auth } from "./firebase.init";

export const FirebaseAuthEmailPasswordCreateUser = async (
  name: string,
  email: string,
  password: string,
  acceptTerms: boolean
) => {
  if (acceptTerms) {
    try {
      const data: UserCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (data?.user?.email) {
        await updateProfile(data.user, {
          displayName: name,
        });

        const token = await data.user.getIdToken();

        console.log(data.user);
        localStorage.setItem("accessToken", token);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("name", data.user.displayName as string);
        return data;
      }
    } catch (error: any) {
      console.log(error);
      console.error(error.message);
    }
  }
};

export const firebaseAuthEmailPasswordSignIn = async (
  email: string,
  password: string,
  rememberMe: boolean
) => {
  console.log(rememberMe);
  try {
    const data: UserCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (data?.user?.email) {
      const token = await data.user.getIdToken();
      localStorage.setItem("accessToken", token);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("name", data.user.displayName as string);
      return data;
    }
  } catch (error: any) {
    console.log(error);
    console.error(error.message);
  }
};

export const firebaseAuthGoogleSignIn = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const data: UserCredential = await signInWithPopup(auth, provider);

    if (data?.user?.email) {
      const token = await data.user.getIdToken();
      localStorage.setItem("accessToken", token);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("name", data.user.displayName as string);
      return data;
    }
  } catch (error: any) {
    console.log(error);
    console.error(error.message);
  }
};

export const firebaseAuthFacebookSignIn = async () => {
  try {
    const provider = new FacebookAuthProvider();
    const data = await signInWithPopup(auth, provider);

    if (data?.user?.email) {
      const token = await data.user.getIdToken();
      localStorage.setItem("accessToken", token);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("name", data.user.displayName as string);
      return data;
    }
  } catch (error: any) {
    console.log(error);
    console.error(error.message);
  }
};
