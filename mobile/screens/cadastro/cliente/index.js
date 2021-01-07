import React, {useState} from "react";
import {TextInput, View, Text, TouchableOpacity} from "react-native";
import {api} from "../../../services/api";
import {Alert} from "react-native";
import {format} from "date-fns";
import {signIn} from "../../../services/security";
import {cpfMask, phoneMask, dataMask} from "../../../masks/masks";

export default function CadastroCliente(props) {
  const [clienteController, setClienteController] = useState({
    nome: "",
    dataNascimento: "",
    cpf: "",
    cnpj: "",
    email: "",
    senha: "",
    celular: "",
  });

  const registrar = async () => {
    const dados = new FormData();

    dados.append("nome", clienteController.nome);
    dados.append("cpf", clienteController.cpf);
    dados.append("cnpj", clienteController.cnpj);
    dados.append("email", clienteController.email);
    dados.append("senha", clienteController.senha);
    dados.append("celular", clienteController.celular);

    const [day, month, year] = clienteController.dataNascimento.split("/");
    const dataFormatada = format(new Date(year, month - 1, day), "yyyy-MM-dd");

    dados.append("data_nascimento", dataFormatada);

    try {
      const retorno = await api.post("/cliente", dados, {
        headers: {
          "Content-type": `multipart/form-data`,
        },
      });
      if (retorno.status === 201) {
        signIn(retorno.data);
        return props.navigation.navigate("InicioCliente");
      }
    } catch (erro) {
      if (erro.response) {
        return Alert.alert(erro.response.data.erro);
      }
      console.log(erro);
    }
  };

  //   const handlerInput = (e) => {
  //     setClienteController({ ...clienteController, [e.target.id]: e.target.value });
  //   };

  // const handlerImagem = (e) => {
  //   if (e.target.files[0]) {
  //     imgRef.current.src = URL.createObjectURL(e.target.files[0]);
  //     imgRef.current.style.display = "block;"
  //   } else {
  //     imgRef.current.src = "";
  //     imgRef.current.src = "";
  //   }
  //   setImagem(e.target.files[0]);
  // };

  const handlerNome = (e) => {
    setClienteController({ ...clienteController, nome: e });
  };

  const handlerEmail = (e) => {
    setClienteController({ ...clienteController, email: e });
  };

  const handlerSenha = (e) => {
    setClienteController({ ...clienteController, senha: e });
  };

  const handlerDataNascimento = (e) => {
    setClienteController({ ...clienteController, dataNascimento: e });
  };

  const handlerCPF = (e) => {
    setClienteController({ ...clienteController, cpf: e });
  };

  const handlerCNPJ = (e) => {
    setClienteController({ ...clienteController, cnpj: e });
  };

  const handlerCelular = (e) => {
    setClienteController({ ...clienteController, celular: e });
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
          width: "90%",
          paddingBottom: 10,
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            width: "100%",
            paddingTop: 7,
            paddingBottom: 7,
            backgroundColor: "#6F4A8E",
            borderTopLeftRadius: 7,
            borderTopRightRadius: 7,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 20 }}>
            Cadastro de clientes
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderBottomLeftRadius: 7,
            borderBottomRightRadius: 7,
            overflow: "hidden",
          }}
        >
          <TextInput
            style={{
              width: "100%",
              color: "#969696",
              textAlign: "center",
              height: 50,
              marginBottom: 10,
            }}
            underlineColorAndroid="#969696"
            placeholder="Insira seu Nome"
            placeholderTextColor="#969696"
            autoCapitalize="sentences"
            value={clienteController.nome}
            onChangeText={handlerNome}
            required
          />
          <TextInput
            style={{
              width: "100%",
              color: "#969696",
              textAlign: "center",
              height: 40,
              marginBottom: 10,
            }}
            underlineColorAndroid="#969696"
            placeholder="Insira seu E-mail"
            placeholderTextColor="#969696"
            autoCapitalize="sentences"
            keyboardType="email-address"
            value={clienteController.email}
            onChangeText={handlerEmail}
            required
          />

          <TextInput
            style={{
              width: "100%",
              color: "#969696",
              textAlign: "center",
              height: 40,
              marginBottom: 10,
            }}
            underlineColorAndroid="#969696"
            placeholder="Insira sua Senha"
            placeholderTextColor="#969696"
            autoCapitalize="sentences"
            value={clienteController.senha}
            onChangeText={handlerSenha}
            required
          />

          <TextInput
            style={{
              width: "100%",
              color: "#969696",
              textAlign: "center",
              height: 40,
              marginBottom: 10,
            }}
            underlineColorAndroid="#969696"
            placeholder="Insira sua Data de Nascimento"
            placeholderTextColor="#969696"
            autoCapitalize="sentences"
            keyboardType="numeric"
            value={dataMask(clienteController.dataNascimento)}
            onChangeText={handlerDataNascimento}
            maxLength={10}
            required
          />

          <TextInput
            style={{
              width: "100%",
              color: "#969696",
              textAlign: "center",
              height: 40,
              marginBottom: 10,
            }}
            underlineColorAndroid="#969696"
            placeholder="Insira seu CPF"
            placeholderTextColor="#969696"
            autoCapitalize="sentences"
            keyboardType="numeric"
            value={cpfMask(clienteController.cpf)}
            onChangeText={handlerCPF}
          />

          <TextInput
            style={{
              width: "100%",
              color: "#969696",
              textAlign: "center",
              height: 40,
              marginBottom: 10,
            }}
            underlineColorAndroid="#969696"
            placeholder="Insira seu CNPJ"
            placeholderTextColor="#969696"
            autoCapitalize="sentences"
            // keyboardType="numeric"
            value={clienteController.cnpj}
            onChange={handlerCNPJ}
          />

          <TextInput
            style={{
              width: "100%",
              color: "#969696",
              textAlign: "center",
              height: 40,
              marginBottom: 10,
            }}
            underlineColorAndroid="#969696"
            placeholder="Insira seu Celular"
            placeholderTextColor="#969696"
            autoCapitalize="sentences"
            keyboardType="numeric"
            value={phoneMask(clienteController.celular)}
            onChangeText={handlerCelular}
            required
          />

          <View
            style={{
              marginTop: 5,
              width: "100%",
              height: 35,
              display: "flex",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 190,
                height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Inicio")}
              >
                <View
                  style={{
                    width: 85,
                    height: 35,
                    backgroundColor: "#6F4A8E",
                    borderRadius: 5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                    Cancelar
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                // onPress={()=> props.navigation.navigate('InicioCliente')}
                onPress={registrar}
              >
                <View
                  style={{
                    width: 85,
                    height: 35,
                    backgroundColor: "#6F4A8E",
                    borderRadius: 5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                    Registre-se
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
