import React, { Component } from 'react';
import {Text, Pressable, StyleSheet, TextInput} from 'react-native';
import { View } from 'react-native-web';

class Login extends Component{
   constructor(props){
        super(props)
         this.state={
            email: '',
            username: '',
            password: ''
         }
   }

   onSubmit() {
        console.log(this.state.email)
        console.log(this.state.username)
        console.log(this.state.password)
   }

    render(){
    return(
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Ingresar</Text>
            
            <TextInput style={styles.input} 
            keyboardType='email-address'
            placeholder='email'
            onChangeText={ text => this.setState({email:text}) }
            value={this.state.email} />

            <TextInput style={styles.input} 
            keyboardType='default'
            placeholder='password'
            secureTextEntry={true} 
            onChangeText={ text => this.setState({password:text}) }
            value={this.state.password}/> 

            <Pressable onPress={() => this.onSubmit()} style={styles.boton}>
                <Text style={styles.textoboton}> Login </Text> 
            </Pressable> 

            <Pressable onPress={ ()=> this.props.navigation.navigate('Register')}>
                <Text style={styles.textoceleste}>No tengo cuenta</Text>
            </Pressable>
            <Pressable onPress={ ()=> this.props.navigation.navigate('HomeMenu')}>
                <Text style={styles.textonaranja}>Entrar en la app</Text>
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
        textAlign:"center"
    }
})

export default Login