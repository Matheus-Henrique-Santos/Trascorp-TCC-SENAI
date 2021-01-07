import React from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';

export default function Valor(props){
    return(
        <View style={{flex: 1, backgroundColor: "#221F3B", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <View style={{width: 250, paddingBottom: 10, borderRadius: 10, backgroundColor: "#FFFFFF", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
                <View style={{width: "100%", paddingTop: 10, paddingBottom: 10, display: "flex", alignItems: "center", backgroundColor: "#6F4A8E", borderTopLeftRadius: 7, borderTopRightRadius: 7}}>
                    <Text style={{color: "#FFFFFF", fontWeight: "bold", fontSize: 17}}>Informe o valor do transporte</Text>
                </View>
                <View style={{width: "100%", paddingTop: 15}}>
                    <TextInput
                        placeholder="Qual o valor cobrado?"
                        underlineColorAndroid="#adadad"
                        style={{paddingBottom: 10, textAlign: "center"}}
                    />
                </View>
                <View style={{width: "60%", paddingTop: 15, display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('FeedSolicitacoes')}
                    >
                        <View style={{width: 73, height: 30, backgroundColor: "#6F4A8E", borderRadius: 7, display: "flex", alignItems:"center", justifyContent: "center"}}>
                            <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>Cancelar</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{width: 73, height: 30, backgroundColor: "#6F4A8E", borderRadius: 7, display: "flex", alignItems:"center", justifyContent: "center"}}>
                            <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>Confirmar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}