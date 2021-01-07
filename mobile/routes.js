import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//--------------------------------------------------------------------------------------------//
import Inicio from './screens/inicio/index';
import Home from './screens/home/index';
import Cadastro from './screens/cadastro/index';
//-------------------------------------------------------------------------------------------//
import CadastroCliente from './screens/cadastro/cliente/index';
import InicioCliente from './screens/cliente/inicio/index';
import Publicacao from './screens/cliente/publicacao/index';
import Solicitacao from './screens/cliente/solicitacao/index';
import Mensagens from './screens/cliente/mensagens/index';
import FeedVeiculosCliente from './screens/cliente/feed/veiculos/index';
import SolicitacaoVeiculo from './screens/cliente/feed/veiculos/solicitacao/index';
// -----------------------------------------------------------------------------------------//
import CadastroMotorista from './screens/cadastro/motorista/index';
import InicioMotorista from './screens/motorista/inicio/index';
import Detalhes from './screens/motorista/detalhes/index';
import Valor from './screens/motorista/valor/index';
import FeedSolicitacoes from './screens/motorista/feed/solicitacoes/index';
import ValorFeedSolicitacoes from './screens/motorista/feed/solicitacoes/valor/index';
import DetalhesFeedSolicitacoes from './screens/motorista/feed/solicitacoes/detalhes/index'; 
import FeedVeiculosMotorista from './screens/motorista/feed/veiculos/index';
import PostVeiculos from './screens/motorista/feed/veiculos/post';
//-----------------------------------------------------------------------------------------//

export default function Rotas() {
    const Stack = createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Inicio" component={Inicio} options={{headerShown: false}}/>
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
                <Stack.Screen name="CadastroCliente" component={CadastroCliente} options={{headerShown: false}}/>
                <Stack.Screen name="Publicacao" component={Publicacao} options={{headerShown: false}}/>
                <Stack.Screen name="Solicitacao" component={Solicitacao} options={{headerShown: false}}/>
                <Stack.Screen name="InicioCliente" component={InicioCliente} options={{headerShown: false}}/>
                <Stack.Screen name="Mensagens" component={Mensagens} options={{headerShown: false}}/>
                <Stack.Screen name="FeedVeiculosCliente" component={FeedVeiculosCliente} options={{headerShown: false}}/>
                <Stack.Screen name="SolicitacaoVeiculo" component={SolicitacaoVeiculo} options={{headerShown: false}}/>
                {/*******************************************************************************************************/}
                <Stack.Screen name="CadastroMotorista" component={CadastroMotorista} options={{headerShown: false}}/>
                <Stack.Screen name="InicioMotorista" component={InicioMotorista} options={{headerShown: false}}/>
                <Stack.Screen name="Detalhes" component={Detalhes} options={{headerShown: false}}/>
                <Stack.Screen name="Valor" component={Valor} options={{headerShown: false}}/>
                <Stack.Screen name="FeedSolicitacoes" component={FeedSolicitacoes} options={{headerShown: false}}/>
                <Stack.Screen name="FeedVeiculosMotorista" component={FeedVeiculosMotorista} options={{headerShown: false}}/>
                <Stack.Screen name="ValorFeedSolicitacoes" component={ValorFeedSolicitacoes} options={{headerShown: false}}/>
                <Stack.Screen name="DetalhesFeedSolicitacoes" component={DetalhesFeedSolicitacoes} options={{headerShown: false}}/>
                <Stack.Screen name="PostVeiculos" component={PostVeiculos} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


