import React, { Component } from 'react';
import {Pressable, Text} from 'react-native';
import { StyleSheet } from 'react-native';

class BotonSaludar extends Component{
   saludar(){
    console.log("estoy saludando")
   }
   
    render(){
        return(
            <Pressable style={styles.boton} 
            onPress={()=> this.saludar()}>
                <Text style={styles.texto}>Saludar</Text>
            </Pressable>
        )
    }
}

const styles = StyleSheet.create({
    boton: {
        backgroundColor: "red",
        padding: 7
    },
    texto:{
        color:"purple",
        fontWeight: "bold"
    }
})

export default BotonSaludar