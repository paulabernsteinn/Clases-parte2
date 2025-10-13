import React from 'react';
import {Text} from 'react-native';
import { View } from 'react-native-web';
import Clickeame from '../components/Clickeame';
import Contador from '../components/Contador';
import { StyleSheet } from 'react-native';

function Home(){
    return(
        <View style={styles.principal}>
            <Text style={styles.texto}>Hola Mundo</Text>
            <Clickeame/>
            <Contador/>
        </View>
    )
}

const styles = StyleSheet.create({
    
    principal:{
        padding: 10
    },
    texto:{
        textAlign:"center"
    }
})

export default Home