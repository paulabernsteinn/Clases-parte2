import React, { Component } from 'react';
import {Text, Pressable, StyleSheet, TextInput} from 'react-native';
import { View } from 'react-native-web';

class DynamicForm extends Component{
   constructor(props){
        super(props)
         this.state={
            comentario: '',
         }
   }

   onSubmit() {
        console.log(this.state.comentario)
   }

    render(){
    return(
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Comentarios</Text>
            
            <TextInput style={styles.input} 
            keyboardType='default'
            placeholder='Comentario'
            onChangeText={ text => this.setState({comentario:text}) }
            value={this.state.comentario} />

            <Pressable onPress={() => this.onSubmit()} style={styles.boton}>
                <Text style={styles.textoboton}> Post </Text> 
            </Pressable> 
        </View>
    )
}}


const styles = StyleSheet.create({
    titulo:{
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 20,
        alignSelf: 'flex-start',
        marginLeft: 20
   },
   textoceleste:{
        textAlign:"center",
        fontSize: 20,
        backgroundColor: '#0bc8f7',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,  
    },
    textonaranja:{
        textAlign:"center",
        fontSize: 20,
        backgroundColor: '#f88c10ff', 
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,    
    },
    contenedor:{
       paddingLeft: 10,
       paddingRight: 10,
       marginTop: 20
    },
    input:{
        height: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderWidth: 1,
        borderColor:'#ccc',
        borderStyle: 'solid',
        borderRadius: 6,
        marginTop: 10,
        marginBottom: 10
    },
    boton:{
        backgroundColor: '#28a745',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 6,
        paddingBottom: 6,
        textAlign:"center",
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#28a745',
        marginBottom: 10
    },
    textoboton:{
        color: '#fff',
        textAlign:"center",

    }

})

export default DynamicForm