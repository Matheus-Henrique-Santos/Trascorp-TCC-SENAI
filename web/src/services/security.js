import { api } from "./api";

import jwtDecode from "jwt-decode";

const CHAVE_USUARIO = "@usuario";
export const signIn = (usuario) => {
  console.log(JSON.stringify(usuario));

  localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuario));
  api.defaults.headers.common["Authorization"] = `Bearer ${usuario.token}`;
};
export const signOut = () => {
  localStorage.clear();
  api.defaults.headers.common["Authorization"] = undefined;
};

export const getUsuario = () => {
  const { usuario } = JSON.parse(localStorage.getItem(CHAVE_USUARIO)) || { usuario: null };
  return usuario;
};

export const getPerfil = () => {
  const { token } = JSON.parse(localStorage.getItem(CHAVE_USUARIO));
  var jwtDecoded = jwtDecode(token)

  return jwtDecoded.usuarioPerfil;
}

export const isSignedIn = (perfil) => {
  console.log(localStorage.getItem(CHAVE_USUARIO))
  const { usuario } = JSON.parse(localStorage.getItem(CHAVE_USUARIO));
  const { token } = JSON.parse(localStorage.getItem(CHAVE_USUARIO));

  var jwtDecoded = jwtDecode(token)

  if (perfil && jwtDecoded.usuarioPerfil !== perfil) {
    console.log(jwtDecoded)
    return false
  }

  if (usuario) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  //aqui futuramente vamos implementar a verificação de token

  return usuario ? true : false;
};
