import React, {useEffect} from "react";
import { View,
     Text, 
     StyleSheet, 
     Image,
     StatusBar} from "react-native";

import {useFocusEffect, useNavigation} from '@react-navigation/native'     

const Splash = () => {

const navigator = useNavigation();   

useEffect (() => {
    setTimeout(() => {
        navigator.navigate('Login')
    }, 2500)
},[])    

useFocusEffect (()=> {
    StatusBar.setHidden(true)
})

    return(
        <View style={styles.container}>
            <Image source={require('../assets/Image/Clothing.png')} 
                    style={{height: 230, width: 230, borderRadius: 150}}/>
            <Text style={styles.text}>Best Fashion Store</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 230,
        backgroundColor: '#DEE2E6'
    },
    text: {
        fontFamily: 'Sono-Regular',
        fontSize: 17,
        bottom: 20,
        color: '#212529'
    }
})