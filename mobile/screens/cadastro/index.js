import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default function Cadastro(props){
    return(
        <View style={{flex: 1, backgroundColor: "#221F3B", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <View style={{width: "70%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
                <TouchableOpacity
                    onPress={()=> props.navigation.navigate('CadastroCliente')}
                >
                    <View style={{width: 250, paddingTop: 40, paddingBottom: 40, backgroundColor: "#FFFFFF", borderRadius: 10, display: "flex", alignItems: "center"}}>
                        <Text style={{color: "#221F3B", fontWeight: "bold", fontSize: 20}}>Sou cliente</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> props.navigation.navigate('CadastroMotorista')}
                >
                    <View style={{width: 250, paddingTop: 40, paddingBottom: 40, backgroundColor: "#FFFFFF", borderRadius: 10, display: "flex", alignItems: "center", marginTop: 20}}>
                        <Text style={{color: "#221F3B", fontWeight: "bold", fontSize: 20}}>Sou motorista</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}