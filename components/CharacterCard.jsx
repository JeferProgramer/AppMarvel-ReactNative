import * as React from 'react';
import {Text, View, Image,StyleSheet,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CharacterCard({image,name}){
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Detail')}>
            <Image style={styles.image} source={image}/> 
            <Text style={styles.font}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
    },
    image: {
      width: 20,
      height: 20,
      margin: 5,
    },
    font: {
      fontSize: 15,
    },
});