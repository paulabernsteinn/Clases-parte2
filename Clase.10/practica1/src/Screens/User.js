import React, { Component } from 'react';
import {Text, FlatList} from 'react-native';
import { View } from 'react-native-web';
import { db, auth } from '../Firebase/confirg';

class User extends Component{
   constructor(props){
        super(props)
         this.state={
            usuarios:[]
         }
   }

componentDidMount(){
    db.collection('users').onSnapshot(
        docs =>{
            let user = [];
            docs.forEach( doc => {
		        user.push({
			        id: doc.id,
			        data: doc.data()
                })
	    
                this.setState({
                    usuarios: user,
                    loading: false
                })
            })
        })  
    }  

    render(){
        console.log(this.state.usuarios);
        
    return(
        <View>
            <FlatList
                data={ this.state.usuarios }
                keyExtractor={ item => item.id.toString() }
                renderItem={ ({item}) => <Text>{item.data.email}</Text> }
            />
        </View>
    )
}}


export default User