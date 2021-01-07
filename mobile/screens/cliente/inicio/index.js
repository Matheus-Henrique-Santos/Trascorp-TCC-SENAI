import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import Home from './assets/home.png';
import Mensagem from './assets/envelope.png';
import Caminhao from './assets/caminhao.png';
import Post from './assets/plus.png';
import Logout from './assets/logout.png';
import MarkerIcon from './assets/marker.png';

export default function InicioCliente(props){
    return(
        <View style={{flex: 1, backgroundColor: "#FFFFFF", display: "flex", flexDirection: "column"}}>
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    initialRegion={{
                        latitude: -23.5287338,
                        longitude: -46.9001818,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                > 
                    <Marker
                    onPress={() => props.navigation.navigate('Solicitacao')}
                        coordinate={{
                            latitude: -23.5287338,
                            longitude: -46.9001818,
                        }}
                        icon={MarkerIcon}
                    />
                </MapView>
            </View>
            <View style={{width: "100%", height: 50, backgroundColor: "#221F3B", display: "flex", flexDirection: "row"}}>
                <View style={{width: "20%", height: 50, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('InicioCliente')}
                    >
                        <Image source={Home} style={{width: 30, height: 30}}/>
                    </TouchableOpacity>
                </View>
                <View style={{width: "20%", height: 50, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Mensagens')}
                    >
                        <Image source={Mensagem} style={{width: 30, height: 30}}/>
                    </TouchableOpacity>
                </View>
                <View style={{width: "20%", height: 50, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Publicacao')}
                    >
                        <Image source={Post} style={{width: 30, height: 30}}/>
                    </TouchableOpacity>
                </View>
                <View style={{width: "20%", height: 50, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('FeedVeiculosCliente')}
                    >
                        <Image source={Caminhao} style={{width: 30, height: 30}}/>
                    </TouchableOpacity>
                </View>
                <View style={{width: "20%", height: 50, display: "flex", justifyContent: "center", alignItems: "center"}}>
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