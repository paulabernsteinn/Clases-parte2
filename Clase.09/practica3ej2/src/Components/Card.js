import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import { View } from 'react-native-web';

function Card(props){
    return(
        <View style={styles.principal}>
            <Text >{props.info.title}</Text>
            <Text>{props.info.price}</Text>
            <Text>{props.info.description}</Text>
            <Text>{props.info.category}</Text>
            <Image style={styles.image} 
                    source={{uri:props.info.image}}
                    resizeMode='contain'/>
        </View>
    )
}

const styles = StyleSheet.create({
  image: {
      height: 200, 
      width: 200
}});

export default Card