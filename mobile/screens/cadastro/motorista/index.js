import React, {useState} from 'react';
import {TextInput, View, Text,TouchableOpacity} from 'react-native';
import {api} from '../../../services/api';
import {Alert} from 'react-native';
import {format} from 'date-fns';
import {signIn} from "../../../services/security";
import {cpfMask, phoneMask, cepMask, dataMask} from '../../../masks/masks';

export default function CadastroMotorista(props){
    const [motoristaController, setMotoristaController] = useState({
    nome: "",
    dataNascimento: "",
    cpf: "",
    cep: "",
    email: "",
    senha: "",
    celular: "",
    });

    // const [imagem] = useState(null);

    const registrar = async () => {
      const dados = new FormData();

      dados.append("nome", motoristaController.nome);
      dados.append("cpf", motoristaController.cpf);
      dados.append("cnpj", motoristaController.cnpj);
      dados.append("email", motoristaController.email);
      dados.append("senha", motoristaController.senha);
      dados.append("celular", motoristaController.celular);
      dados.append("cep", motoristaController.cep);

    const [day, month, year] = motoristaController.dataNascimento.split("/")
    const dataFormatada = format(new Date(year, month - 1, day), "yyyy-MM-dd");

    dados.append("data_nascimento", dataFormatada);

    try {
      const retorno = await api.post("/motorista", dados, {
        headers: {
          "Content-type": `multipart/form-data`,
        },
      });
      if (retorno.status === 201) {
        signIn(retorno.data);
        return props.navigation.navigate("InicioMotorista");
      }
    } catch (erro) {
      if (erro.response) {
        return Alert.alert(erro.response.data.erro);
      } 
      console.log(erro);
    }
  };

  const handlerNome = (e) => {
    setMotoristaController({ ...motoristaController, nome: e });
  };
  
  const handlerDataNascimento = (e) => {
    setMotoristaController({ ...motoristaController, dataNascimento: e });
  };

  const handlerCPF = (e) => {
    setMotoristaController({ ...motoristaController, cpf: e });
  };

  const handlerCNPJ = (e) => {
    setMotoristaController({ ...motoristaController, cnpj: e });
  };

  const handlerEmail = (e) => {
    setMotoristaController({ ...motoristaController, email: e });
  };

  const handlerSenha = (e) => {
    setMotoristaController({ ...motoristaController, senha: e });
  };

  const handlerCelular = (e) => {
    setMotoristaController({ ...motoristaController, celular: e });
  };

  const handlerCEP = (e) => {
    setMotoristaController({ ...motoristaController, cep: e });
  };

    return(
        <View style={{flex: 1, backgroundColor: "#221F3B", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <View style={{width: "90%", paddingBottom: 10, backgroundColor: "#FFFFFF", borderRadius: 10, display: "flex", flexDirection: "column"}}>
                <View style={{width: "100%", paddingTop: 7, paddingBottom: 7, backgroundColor: "#6F4A8E", borderTopLeftRadius: 7, borderTopRightRadius: 7, display: "flex", alignItems: "center"}}>
                    <Text style={{color: "#FFFFFF", fontWeight: "bold", fontSize: 20}}>Cadastro de motoristas</Text>
                </View>
                <View style={{backgroundColor: "#FFFFFF", borderBottomLeftRadius: 7, borderBottomRightRadius: 7, overflow: "hidden"}}>
                    
                    <TextInput
                        style={{width: "100%", color: "#969696", textAlign: "center", height: 50, marginBottom: 10}}
                        underlineColorAndroid="#969696"
                        placeholder="Insira seu Nome"
                        placeholderTextColor="#969696"
                        autoCapitalize="sentences"
                        value={motoristaController.nome}
                        onChangeText={handlerNome}
                        id="nome"
                        required
                    />

                    <TextInput
                        style={{width: "100%", color: "#969696", textAlign: "center", height: 50, marginBottom: 10}}
                        underlineColorAndroid="#969696"
                        placeholder="Insira sua Data de nascimento"
                        placeholderTextColor="#969696"
                        autoCapitalize="sentences"
                        keyboardType="numeric"
                        value={dataMask(motoristaController.dataNascimento)}
                        onChangeText={handlerDataNascimento}
                        maxLength={10}
                        id="dataNascimento"
                        required
                    />

                    <TextInput
                        style={{width: "100%", color: "#969696", textAlign: "center", height: 50, marginBottom: 10}}
                        underlineColorAndroid="#969696"
                        placeholder="Insira seu CPF"
                        placeholderTextColor="#969696"
                        autoCapitalize="sentences"
                        keyboardType="numeric"
                        value={cpfMask(motoristaController.cpf)}
                        onChangeText={handlerCPF}
                        id="cpf"
                        maxLength={14}
                    />

                    <TextInput
                        style={{width: "100%", color: "#969696", textAlign: "center", height: 50, marginBottom: 10}}
                        underlineColorAndroid="#969696"
                        placeholder="Insira seu CNPJ"
                        placeholderTextColor="#969696"
                        autoCapitalize="sentences"
                        // keyboardType="numeric"
                        value={motoristaController.cnpj}
                        onChangeText={handlerCNPJ}
                        id="cnpj"
                        maxLength={30}
                    />

                    <TextInput
                        style={{width: "100%", color: "#969696", textAlign: "center", height: 50, marginBottom: 10}}
                        underlineColorAndroid="#969696"
                        placeholder="Insira seu Email"
                        placeholderTextColor="#969696"
                        autoCapitalize="sentences"
                        keyboardType="email-address"
                        value={(motoristaController.email)}
                        onChangeText={handlerEmail}
                        id="email"
                        required
                    />

                    <TextInput
                        style={{width: "100%", color: "#969696", textAlign: "center", height: 50, marginBottom: 10}}
                        underlineColorAndroid="#969696"
                        placeholder="Insira sua Senha"
                        placeholderTextColor="#969696"
                        autoCapitalize="sentences"
                        value={motoristaController.senha}
                        onChangeText={handlerSenha}
                        id="senha"
                        required
                    />

                    <TextInput
                        style={{width: "100%", color: "#969696", textAlign: "center", height: 50, marginBottom: 10}}
                        underlineColorAndroid="#969696"
                        placeholder="Insira seu Celular"
                        placeholderTextColor="#969696"
                        autoCapitalize="sentences"
                        keyboardType="numeric"
                        value={phoneMask(motoristaController.celular)}
                        onChangeText={handlerCelular}
                        id="celular"
                        required 
                    />

                    <TextInput
                        style={{flex: 1, color: '#EBEBEB', textAlign: "center"}}
                        underlineColorAndroid="#EBEBEB"
                        placeholder="Insira seu CEP"
                        placeholderTextColor="#EBEBEB"
                        autoCapitalize="sentences"
                        keyboardType="numeric"
                        value={cepMask(motoristaController.cep)}
                        onChangeText={handlerCEP}
                        id="cep"
                        required
                    />

                    <View style={{marginTop: 5, width: "100%", height: 35, display: "flex", alignItems: "center"}}>
                        <View style={{width: 190, height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <TouchableOpacity
                                onPress={()=> props.navigation.navigate('Home')}
                            >
                                <View style={{width: 85, height: 35, backgroundColor: "#6F4A8E", borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>
                                        Cancelar
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={registrar}
                                // onPress={()=> props.navigation.navigate('InicioMotorista')}
                            >
                                <View style={{width: 85, height: 35, backgroundColor: "#6F4A8E", borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Text 
                                        style={{color: "#FFFFFF", fontWeight: "bold"}}>
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