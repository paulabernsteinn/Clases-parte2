import React, { Component } from 'react';
import {Pressable, Text} from 'react-native';
import { StyleSheet } from 'react-native';

class Clickeame extends Component{
   clickeame(){
    console.log("me clickearon")
   }
   
    render(){
        return(
            <Pressable style={styles.clickable}
            onPress={()=> this.clickeame()}>
                <Text style={styles.texto}>Clickeame</Text>
            </Pressable>
        )
    }
}

const styles = StyleSheet.create({
    clickable:{
        padding: 4,
        backgroundColor: '#ccc',
        marginBottom: 10,
        borderCurve: 4,
    },
    texto:{
        fontWeight: "bold",
        textAlign:"center"
    }
})

export default Clickeame