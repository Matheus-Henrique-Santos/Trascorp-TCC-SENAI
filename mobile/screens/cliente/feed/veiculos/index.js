import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import Add from './assets/add.png';
import Caminhao from './assets/caminhao.jpg';
import Seta from './assets/seta.png';

export default function FeedVeiculos(props){
    return(
        <View style={{flex: 1, backgroundColor: "#221F3B", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <View style={{width: "90%", height: "90%", backgroundColor: "#FFFFFF", borderRadius: 10, display: "flex", flexDirection: "column"}}>
                <View style={{width: "100%", paddingTop: 7, paddingBottom: 7, display: "flex", alignItems: "center", backgroundColor: "#6F4A8E", borderTopLeftRadius: 7, borderTopRightRadius: 7}}>
                    <Text style={{color: "#FFFFFF", fontWeight: "bold", fontSize: 20}}>Feed de veículos</Text>
                </View>
                <View style={{flex: 1, display: "flex", flexDirection: "column", padding: 8, overflow: "hidden", zIndex: 999}}>
                    
                    {/* Início dos cards do Feed */}

                    <View style={{width: "100%", backgroundColor: "#EBEBEB", borderRadius: 7, marginTop: 5, padding: 8, display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 15, color: "#000000"}}>João da Silva</Text>
                        <Image source={Caminhao} style={{width: "100%", height: 140, marginTop: 8, borderRadius: 7}}/>
                        <View style={{marginTop: 5, width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <Text style={{fontWeight: "bold", color: "#000000", fontSize: 16}}>Descrição do veículo</Text>
                            <Text style={{color: "#000000", fontSize: 15}}>Marca, modelo, capacidade</Text>
                        </View>
                        <View style={{width: "100%", height: 35, display: "flex", alignItems: "center"}}>
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('SolicitacaoVeiculo')}
                            >
                                <View style={{width: 80, height: 30, borderRadius: 5, marginTop: 7, backgroundColor: "#6F4A8E", display: "flex", alignItems: "center", justifyContent: "center"}}>
                                    <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>Solicitar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Fim dos cards do feed */}

                </View>
                <View style={{width: "100%", backgroundColor: "#6F4A8E", display: "flex", display: "flex", alignItems: "center", borderBottomLeftRadius: 7, borderBottomRightRadius: 7}}>
                    <View style={{height: 35, display: "flex", alignItems: "center", justifyContent: "center"}}>   
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('InicioCliente')}
                        >
                            <Image source={Seta} style={{width: 30, height: 30}}/>
                        </TouchableOpacity>
                    </View> 
                </View>
            </View>
        </View>
    )
}    