import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import Seta from './assets/seta.png';
import Recusar from './assets/recusar.png';
import Aceitar from './assets/aceitar.png';

export default function FeedSolicitacoes(props){
    return(
        <View style={{flex: 1, backgroundColor: "#221F3B", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <View style={{width: "98%", height: "85%", borderRadius: 10, backgroundColor: "#FFFFFF"}}>
                <View style={{width: "100%", height: 50, borderTopLeftRadius: 7, borderTopRightRadius: 7, backgroundColor: "#6F4A8E", display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <View style={{width: 50, height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <View style={{width: 27, height: 27, display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <TouchableOpacity style={{zIndex: 999}}
                                onPress={() => props.navigation.navigate('InicioMotorista')}
                            >
                                <Image source={Seta} style={{width: 27, height: 27}}/>
                                </TouchableOpacity>
                            </View>
                    </View>
                    <View style={{width: 220, height: "100%", margin: "auto", display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                        <Text style={{color: "#FFFFFF", fontSize: 22, fontWeight: "bold", marginRight: 15}}>
                            Publicações
                        </Text>
                    </View>
                </View>
                <View style={{flex: 1, borderBottomRightRadius: 7, borderBottomLeftRadius: 7, display: "flex", flexDirection: "column", paddingLeft: 5, paddingRight: 5, zIndex: 9, overflow: "hidden"}}>
                    <View style={{width: "100%", height: 150, backgroundColor: "#EBEBEB", marginTop: 5, borderRadius: 10, display: "flex", flexDirection: "row"}}>
                        <View style={{width: "73%", hieght: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <Text style={{fontSize: 20, color: "#000000", fontWeight: "bold", marginLeft: 10}}>Marcos Felipe solicitou um transporte</Text>
                        </View>
                        <View style={{width: "27%", hieght: "100%", display: "flex", flexDirection: "column"}}>
                            <View style={{width: "100%", height: "50%", display: "flex", alignItems: "center", justifyContent: "flex-start", paddingTop: 10}}>
                                <TouchableOpacity
                                    onPress={() => props.navigation.navigate('DetalhesFeedSolicitacoes')}
                                >
                                    <Text style={{fontWeight: "bold"}}>Detalhes</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{width: "100%", height: "50%", paddingBottom: 10, display: "flex", alignItems: "flex-end", flexDirection: "row", justifyContent: "space-evenly"}}>
                                <TouchableOpacity>
                                    <View style={{width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center"}}>
                                        <Image source={Recusar} style={{width: 27, height: 27}}/>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => props.navigation.navigate('ValorFeedSolicitacoes')}
                                >
                                    <View style={{width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center"}}>
                                        <Image source={Aceitar} style={{width: 27, height: 27}}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}