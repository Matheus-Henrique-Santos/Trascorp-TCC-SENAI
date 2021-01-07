import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, Image, TouchableOpacity, Text} from 'react-native';

import Home from './assets/home.png';
import Postar from './assets/plus.png';
import Publicacoes from './assets/group.png';
import Logout from './assets/logout.png';
import Recusar from './assets/recusar.png';
import Aceitar from './assets/aceitar.png';

export default function InicioMotorista(props){
    return(
        // <StatusBar/>
        <View style={{flex: 1, backgroundColor: "#FFFFFF", display: "flex", flexDirection: "column"}}>
            <View style={{flex: 1, display: "flex", flexDirection: "column"}}>
                <View style={{width: "100%", paddingTop: 35, paddingBottom: 15, backgroundColor: "#6F4A8E", display: "flex", alignItems: "center"}}>
                    <Text style={{color: "#FFFFFF", fontWeight: "bold", fontSize: 20}}>Solicitações</Text>
                </View>
                <View style={{flex: 1, overflow: "hidden", zIndex: 999, paddingLeft: 5, paddingRight: 5}}>
                <View style={{width: "100%", height: 150, backgroundColor: "#EBEBEB", marginTop: 5, borderRadius: 10, display: "flex", flexDirection: "row"}}>
                        <View style={{width: "73%", hieght: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <Text style={{fontSize: 20, color: "#000000", fontWeight: "bold", marginLeft: 10}}>Marcos Felipe solicitou um transporte</Text>
                        </View>
                        <View style={{width: "27%", hieght: "100%", display: "flex", flexDirection: "column"}}>
                            <View style={{width: "100%", height: "50%", display: "flex", alignItems: "center", justifyContent: "flex-start", paddingTop: 10}}>
                                <TouchableOpacity
                                    onPress={() => props.navigation.navigate('Detalhes')}
                                >
                                    <Text style={{fontWeight: "bold"}}>Detalhes</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{width: "100%", height: "50%", paddingBottom: 10, display: "flex", alignItems: "flex-end", flexDirection: "row", justifyContent: "space-evenly"}}>
                                <TouchableOpacity>
                                    <View style={{width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center"}}>
                                        <Image source={Recusar} style={{width: "90%", height: "90%"}}/>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => props.navigation.navigate('Valor')}
                                >
                                    <View style={{width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center"}}>
                                        <Image source={Aceitar} style={{width: "90%", height: "90%"}}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View> 
            </View>
            <View style={{width: "100%", height: 50, backgroundColor: "#221F3B", display: "flex", flexDirection: "row"}}>
                <View style={{width: "25%", height: 50, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('InicioMotorista')}
                    >
                        <Image source={Home} style={{width: 30, height: 30}}/>
                    </TouchableOpacity>
                </View>
                <View style={{width: "25%", height: 50, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity
                        onPress={()=> props.navigation.navigate('FeedSolicitacoes')}
                    >
                        <Image source={Publicacoes} style={{width: 30, height: 30}}/>
                    </TouchableOpacity>
                </View>
                <View style={{width: "25%", height: 50, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('PostVeiculos')}
                    >
                        <Image source={Postar} style={{width: 30, height: 30}}/>
                    </TouchableOpacity>
                </View>
                <View style={{width: "25%", height: 50, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Inicio')}
                    >
                        <Image source={Logout} style={{width: 30, height: 30}}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}