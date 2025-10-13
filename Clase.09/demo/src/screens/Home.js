import React from 'react';
import {Text} from 'react-native';
import BotonSaludar from '../components/BotonSaludar';
import { View } from 'react-native-web';

function Home(){
    return(
        <View>
            <Text>Hola Mundo</Text>
            <BotonSaludar/>
        </View>
    )
}

export default Home