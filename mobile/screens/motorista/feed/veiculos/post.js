import React from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';

import Caminhao from './assets/caminhao.jpg';

export default function FeedVeiculos(props){
    return(
        <View style={{flex: 1, backgroundColor: "#221F3B", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <View style={{width: "90%", backgroundColor: "#6F4A8E", borderRadius: 10, display: "flex", flexDirection: "column"}}>
                <View style={{width: "100%", paddingTop: 7, paddingBottom: 7, display: "flex", alignItems: "center", borderTopRightRadius: 7, borderTopLeftRadius: 7}}>
                    <Text style={{color: "#FFFFFF", fontWeight: "bold", fontSize: 20}}>Publique seu veículo</Text>
                </View>
                <View style={{backgroundColor: "#FFFFFF", borderBottomRightRadius: 7, borderBottomLeftRadius: 7, display: "flex", flexDirection: "column", padding: 8}}>
                    <TouchableOpacity>
                        <View style={{width: 150, height: 35, backgroundColor: "#6F4A8E", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>Imagem do veículo</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{width: "95%", height: 50, marginTop: 20}}>
                        <TextInput 
                            placeholder="Descreva seu veículo"
                            placeholderTextColor="#969696"
                            underlineColorAndroid="#969696"
                            secureTextEntry={false}
                            maxLength={250}
                            style={{width: "100%", height: 50, textAlign: "center", color: "#969696", paddingBottom: 10}}/>
                    </View>
                    <View style={{width: "100%", height: 35, marginTop: 10, display: "flex", alignItems: "center"}}>
                        <View style={{width: 180, height: 35, display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('FeedVeiculosMotorista')}
                            >
                                <View style={{width: 80, height: 35, backgroundColor: "#6F4A8E", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center"}}>
                                    <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>Cancelar</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{width: 80, height: 35, backgroundColor: "#6F4A8E", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center"}}>
                                    <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>Publicar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}    