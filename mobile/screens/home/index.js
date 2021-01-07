import React, { useState } from "react";

import { api } from "../../services/api";
import { Text, View, TextInput, TouchableOpacity, Alert, AsyncStorage} from "react-native";
import { signIn } from "../../services/security";

export default function Home(props) {

  function showAlert(){
    Alert.alert(
      "Erro", "Tente novamente",
      [
        {text: "Ok", onPress: ()=> props.navigation.navigate("Home")}
      ]
    )
  }

  const [clienteLogin, setClienteLogin] = useState({
    email: "",
    senha: "",
  });

    const entrar = async (e) => {
      e.preventDefault();
      console.log(clienteLogin);

      try {
        const retorno = await api.post("/sessao", clienteLogin);
        if (retorno.status === 201) {
          signIn(retorno.data);
          const {usuarioPerfil} = retorno.data.usuario;

          if (usuarioPerfil === "motorista"){
            return props.navigation.navigate("InicioMotorista");
          }else{
            return props.navigation.navigate("InicioCliente");
          }
        }
      } catch (erro) {
        if (erro.response){
          return Alert.alert(erro.response.data.erro);
        }
      }
    };

  const handlerEmail = (e) => {
    setClienteLogin({ ...clienteLogin, email: e });
  };
  const handlerSenha = (e) => {
    setClienteLogin({ ...clienteLogin, senha: e });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#221F3B",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: "80%",
          height: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "100%", height: "60%" }}>
          <TextInput
            id="email"
            placeholder="Insira seu e-mail"
            placeholderTextColor="#FFFFFF"
            underlineColorAndroid="#FFFFFF"
            textContentType="emailAddress"
            onChangeText={handlerEmail}
            style={{
              width: "100%",
              height: "43%",
              textAlign: "center",
              color: "#FFFFFF",
              letterSpacing: 2
            }}
          />
          <TextInput
            id="senha"
            placeholder="Insira sua senha"
            placeholderTextColor="#FFFFFF"
            underlineColorAndroid="#FFFFFF"
            secureTextEntry={true}
            textContentType="password"
            onChangeText={handlerSenha}
            style={{
              width: "100%",
              height: "43%",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          />
        </View>
        <View
          style={{
            width: 250,
            height: 80,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity 
          
          onPress={entrar}
          // onPress={props.navigation.navigate('InicioCliente')}
          // onPress={showAlert}
          >
            <View
              style={{
                width: 200,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                borderRadius: 7,
              }}
            >
              <Text style={{ color: "#221F3B", fontWeight: "bold" }}>
                Entrar
              </Text>
            </View>
          </TouchableOpacity>
          <Text
            style={{ color: "#FFFFFF", textAlign: "center", marginTop: 20 }}
          >
            Não possui uma conta?
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Cadastro")}
          >
            <Text
              style={{ color: "#FFFFFF", fontWeight: "bold", marginLeft: 15 }}
            >
              Crie uma!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
