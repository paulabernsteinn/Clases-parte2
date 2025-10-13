import React, { Component } from 'react';
import {View, Pressable, Text} from 'react-native';
import { StyleSheet } from 'react-native';


class Contador extends Component{
   constructor(){
        super()
         this.state={
            cantidad: 0,
        }}

    click(){
        this.setState({
            cantidad: this.state.cantidad + 1
        })
    }
   
    render(){
        return(
            <View style={styles.principal}>
                <Text style={styles.texto}>Cantidad de clicks: {this.state.cantidad}</Text>
                <Pressable onPress={()=> this.click()} style={styles.clickeable}>
                    <Text style={styles.texto}>Click aquí para contar</Text>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    principal:{
        margin: 5,
    },
    clickeable:{
        padding: 7,
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        marginBottom: 10,
        borderCurve: 4
    },
    texto:{
        textAlign:"center"
    }
})

export default Contador