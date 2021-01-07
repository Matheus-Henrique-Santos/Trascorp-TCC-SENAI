import React from 'react';
import {TextInput, View, Text, KeyboardAvoidingView,TouchableOpacity, ScrollView} from 'react-native';

export default function CadastroCliente(props){
    return(
        <View style={{flex: 1, backgroundColor: "#221F3B", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <View style={{width: "90%", paddingBottom: 2, backgroundColor: "#FFFFFF", borderRadius: 10, display: "flex", flexDirection: "column"}}>
                    <View style={{width: "100%", paddingTop: 7, paddingBottom: 7, backgroundColor: "#6F4A8E", borderTopLeftRadius: 7, borderTopRightRadius: 7, display: "flex", alignItems: "center"}}>
                        <Text style={{color: "#FFFFFF", fontWeight: "bold", fontSize: 20}}>Detalhes</Text>
                    </View>
                    <View style={{backgroundColor: "#FFFFFF", borderBottomLeftRadius: 7, borderBottomRightRadius: 7, overflow: "hidden", padding: 8, display: "flex", flexDirection: "column"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16, color: "#000000"}}>Nome do solicitante</Text>
                        <Text style={{marginTop: 5, color: "#000000", fontSize: 15}}>Marcos Felipe</Text>
                        <Text style={{fontWeight: "bold", fontSize: 16, color: "#000000", marginTop: 8}}>Data da retirada</Text>
                        <Text style={{marginTop: 5, color: "#000000", fontSize: 15}}>00/00/0000</Text> 
                        <Text style={{fontWeight: "bold", fontSize: 16, color: "#000000", marginTop: 8}}>Horário da retirada</Text>
                        <Text style={{marginTop: 5, color: "#000000", fontSize: 15}}>00:00</Text>
                        <Text style={{fontWeight: "bold", fontSize: 16, color: "#000000", marginTop: 8}}>Endereço de partida</Text>
                        <Text style={{marginTop: 5, color: "#000000", fontSize: 15}}>Rua X</Text>
                        <Text style={{fontWeight: "bold", fontSize: 16, color: "#000000", marginTop: 8}}>Endereço de chegada</Text>
                        <Text style={{marginTop: 5, color: "#000000", fontSize: 15}}>Rua Y</Text>
                        <Text style={{fontWeight: "bold", fontSize: 16, color: "#000000", marginTop: 8}}>Item</Text>
                        <Text style={{marginTop: 5, color: "#000000", fontSize: 15}}>Objeto</Text>
                        <Text style={{fontWeight: "bold", fontSize: 16, color: "#000000", marginTop: 8}}>Descrição</Text>
                        <Text style={{marginTop: 5, color: "#000000", fontSize: 15}}>Peso, tamanho, quantidade...</Text>
                        <View style={{width: "100%", height: 35, marginTop: 12, display: "flex", alignItems: "center"}}>
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('FeedSolicitacoes')}
                            >
                                <View style={{width: 80, height: 35, borderRadius: 5, backgroundColor: "#6F4A8E", display: "flex", alignItems: "center", justifyContent: "center"}}>
                                    <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>Voltar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>  
                 </View>     
        </View>
    );
}