import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function Solicitacao(props){
    return(
        <View style={{flex: 1, backgroundColor: "#221F3B", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <View style={{width: "90%", backgroundColor: "#FFFFFF", borderRadius: 10, display: "flex", displayFlex: "column"}}>
                <View style={{width: "100%", paddingTop: 10, paddingBottom: 10, backgroundColor: "#6F4A8E", borderTopLeftRadius: 7, borderTopRightRadius: 7, display: "flex", alignItems: "center"}}>
                    <Text style={{color: "#FFFFFF", fontWeight: "bold", fontSize: 20}}>Solicite uma orçamento</Text>
                </View>
                <View style={{paddingTop: 7, paddingBottom: 7, backgroundColor: "#FFFFFF", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, display: "flex", flexDirection: "column", paddingTop: 15, paddingBottom: 15, overflow: "hidden"}}>
                    <TextInput
                        style={{width: "100%", height: 45, marginBottom: 10, textAlign: "center"}}
                        underlineColorAndroid="#969696"
                        placeholderTextColor="#969696"
                        placeholder="Data da retirada"
                    />
                    <TextInput
                        style={{width: "100%", height: 45, marginBottom: 10, textAlign: "center"}}
                        underlineColorAndroid="#969696"
                        placeholderTextColor="#969696"
                        placeholder="Horário da retirada"
                    />
                    <TextInput
                        style={{width: "100%", height: 45, marginBottom: 10, textAlign: "center"}}
                        underlineColorAndroid="#969696"
                        placeholderTextColor="#969696"
                        placeholder="Endereço de partida"
                    />
                    <TextInput
                        style={{width: "100%", height: 45, marginBottom: 10, textAlign: "center"}}
                        underlineColorAndroid="#969696"
                        placeholderTextColor="#969696"
                        placeholder="Endereço de chegada"
                    />
                    <TextInput
                        style={{width: "100%", height: 45, marginBottom: 10, textAlign: "center"}}
                        underlineColorAndroid="#969696"
                        placeholderTextColor="#969696"
                        placeholder="Item"
                    />
                    <TextInput
                        style={{width: "100%", height: 45, marginBottom: 10, textAlign: "center"}}
                        underlineColorAndroid="#969696"
                        placeholderTextColor="#969696"
                        placeholder="Descrição"
                    />
                    <View style={{width: "100%", height: 35, display: "flex", alignItems: "center"}}>
                        <View style={{width: 190, height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('InicioCliente')}
                            >
                                <View style={{width: 75, height: "100%", backgroundColor: "#6F4A8E", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center"}}>
                                    <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>Cancelar</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{width: 75, height: "100%", backgroundColor: "#6F4A8E", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center"}}>
                                    <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>Solicitar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}