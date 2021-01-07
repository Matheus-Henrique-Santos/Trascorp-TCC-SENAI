import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { Linking } from "react-native";

import Seta from './assets/seta.png';
import Whatsapp from './assets/whatsapp.png';

export default function Mensagens(props){

    function whatsapp(){
        Linking.openURL('whatsapp://send?text=Olá! Chamo-me Marcos Felipe. Recentemente, eu te solicitei um transporte, pela TransCorp. Estou entrando em contato para mais informações.&phone=5511952848516'); 
    }

    return(
        <View style={{flex: 1, backgroundColor: "#221F3B", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <View style={{width: "90%", height: "70%", backgroundColor: "#FFFFFF", borderRadius: 10}}>
                <View style={{width: "100%", paddingTop: 7, paddingBottom: 7, display: "flex", alignItems: "center", backgroundColor: "#6F4A8E", borderTopLeftRadius: 7, borderTopRightRadius: 7}}>
                    <Text style={{color: "#FFFFFF", fontSize: 20, fontWeight: "bold"}}>Mensagens</Text>
                </View>
                <View style={{flex: 1, padding: 8, borderBottomLeftRadius: 7, borderBottomRightRadius: 7, zIndex: 999, overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    {/* Início das mensagens */}
                    <View style={{width: "98%", backgroundColor: "#d9d9d9", borderRadius: 10}}>
                        <View style={{borderBottomLeftRadius: 7, borderBottomRightRadius: 7, display: "flex", padding: 7}}>
                            <Text style={{color: "#000000", fontWeight: "bold", fontSize: 16, textAlign: "center"}}>Sua solicitação foi aceita</Text>
                            <Text style={{color: "#000000", marginTop: 10, fontWeight: "bold"}}>Nome do motorista</Text>
                            <Text style={{color: "#000000"}}>Vitória Rocha</Text>
                            <Text style={{color: "#000000", marginTop: 10, fontWeight: "bold"}}>Valor cobrado</Text>
                            <Text style={{color: "#000000"}}>R$ 600,00</Text>
                            <Text style={{color: "#000000", marginTop: 10, fontWeight: "bold"}}>E-mail</Text>
                            <Text style={{color: "#000000"}}>vitoriarocha@gmail.com</Text>
                            <Text style={{color: "#000000", marginTop: 10, fontWeight: "bold"}}>Celular</Text>
                            <Text style={{color: "#000000"}}>(11) 9 5284-8516</Text>
                            <View style={{width: "100%", height: 35, marginTop: 16, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row"}}>
                                <Text style={{fontWeight: "bold"}}>Contate-o via whatsapp</Text>
                                <TouchableOpacity
                                    onPress={whatsapp}
                                >
                                    <View style={{width: 35, height: 35, display: "flex", alignItems: "center", justifyContent: "center"}}>
                                        <Image source={Whatsapp} style={{width: 33, height: 33}}/>     
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/* Fim das mensagens */}
                </View>
            </View>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('InicioCliente')}
            >
                <View style={{width: 45, height: 45, borderRadius: 45 / 2, backgroundColor: "#6F4A8E", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 20}}>
                    <Image source={Seta} style={{width: 30, height: 30}}/>
                </View>
            </TouchableOpacity>
        </View>
    );
}    