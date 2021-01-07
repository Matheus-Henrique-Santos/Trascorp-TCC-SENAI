import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import Animacao from './assets/animacao.gif';
import Proximo from './assets/seta_direita.png';

export default function Inicio(props){
    return(
        <View style={{flex: 1, backgroundColor: "#221F3B", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center"}}>
            <View style={{width: "80%", height: "35%", borderRadius: 10, overflow: "hidden"}}>
                <Image source={Animacao} style={{width: "100%", height: "100%"}}/>
            </View>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("Home")}
            >
                <View style={{width: 70, height: 70, borderRadius: 70 / 2}}>
                    <Image source={Proximo} style={{width: 70, height: 70, borderRadius: 70 / 2}}/>
                </View>
            </TouchableOpacity>
        </View>
    );
}