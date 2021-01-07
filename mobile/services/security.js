import { api } from "./api";
import { AsyncStorage } from "react-native";

const CHAVE_CLIENTE = "@cliente";
export const signIn = async (cliente) => {
  console.log(JSON.stringify(cliente));

  await AsyncStorage.setItem(CHAVE_CLIENTE, JSON.stringify(cliente));
  api.defaults.headers.common["Authorization"] = `Bearer ${cliente.token}`;
};
export const signOut = () => {
  AsyncStorage.clear();
  api.defaults.headers.common["Authorization"] = undefined;
};

export const getCliente = async () => {
  const { cliente } = JSON.parse(await AsyncStorage.getItem(CHAVE_CLIENTE));
  return cliente;
};
export const isSignedIn = async () => {
  const cliente = JSON.parse(await AsyncStorage.getItem(CHAVE_CLIENTE));
  if (cliente) {
    api.defaults.headers.common["Authorization"] = `Bearer ${cliente.token}`;
  }
  //aqui futuramente vamos implementar a verificação de token
  return cliente ? true : false;
};
