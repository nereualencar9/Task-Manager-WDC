import { createContext, PropsWithChildren, useState } from "react";
import { API } from "../configs/ai";
import { STORAGE_USERID_KEY } from "../utils/userIdAuthkey";

export type SignInTypes = {
  email: string;
  password: string;
};

export type SignUpTypes = {
  name: string;
  email: string;
  password: string;
};

type AuthContextTypes = {
  signIn: (data: SignInTypes) => Promise<boolean | void>;
  signUp: (data: SignUpTypes) => Promise<boolean | void>;
  signOut: () => void;
  authUserID: string;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextTypes>(
  {} as AuthContextTypes
);

export function AuthProvider({ children }: PropsWithChildren) {
  const [authUserID, setAuthUserID] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function signIn({ email, password }: SignInTypes) {
    if (!email || !password) throw alert("Por favor informar email e senha");

    setIsLoading(true);

    return API.post("/login", { email, password })
      .then((response) => {
        const userID = response.data.id;
        setAuthUserID(userID);

        localStorage.setItem(STORAGE_USERID_KEY, JSON.stringify(userID));

        return true;
      })
      .catch((error) => {
        console.error(error);
        alert("Erro ao fazer login");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function signUp({ name, email, password }: SignUpTypes) {
    if (!name || !email || !password)
      throw alert("Por favor informar email e senha");

    setIsLoading(true);

    return API.post("/user", { name, email, password })
      .then((response) => {
        if (response.data.status == 201) {
          alert("Usuário cadastrado com sucesso!");
        }

        return true;
      })
      .catch((error) => {
        console.error(error);
        alert("Erro ao cadastrar usuário");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function signOut() {
    setAuthUserID("");

    API.post("/logout").catch((error) => {
      console.error(error);
    });
  }

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, signUp, authUserID, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
