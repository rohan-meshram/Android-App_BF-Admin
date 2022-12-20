import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons'
import firestore from '@react-native-firebase/firestore';

const Login = ({ navigation }) => {

    // useEffect(() => {
    //     firestore()
    //     .collection('Admin')
    //     .add({
    //       Email: 'admin@admin.com',
    //       Password: 'admin@1234'
    //     })
    //     .then(() => {
    //       console.log('Admin added!');
    //     });
    // }, [])


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isPasswordVisible, setIsPasswordVisible] = useState(true)

    const adminLogin = async () => {
        const users = await firestore().collection('Admin').get();
        // console.log(users.docs);
        if (email === users.docs[0]._data.Email &&
            password === users.docs[0]._data.Password) {
            navigation.navigate('Dashboard')
        } else {
            alert("Please Check Email or Password")
        }
        console.log(users.docs[0]._data);
    }

    return (
        <View style={styles.container}>

            <View style={styles.bgContanier}>
                <Image source={require('../../assets/Image/Clothing.png')}
                    style={{ height: 300, width: 300, borderRadius: 150 }} />
                <Text style={[styles.loginText, { marginLeft: -300 }]}>Login</Text>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                <View style={styles.formBox}>

                    <View style={styles.customInput}>
                        <Ionicons name='mail' size={22} color={'#212529'}
                            style={{ padding: 5 }} />
                        <TextInput placeholder="Email"
                            keyboardType={'email-address'}
                            value={email}
                            onChangeText={text => setEmail(text)}
                            style={styles.inpuBoxText}
                        />
                    </View>

                    <View style={[styles.customInput, { marginTop: 20 }]}>
                        <Ionicons name="lock-closed" size={22} color={'#212529'}
                            style={{ padding: 5 }} />
                        <TextInput placeholder="Password"
                            value={password}
                            onChangeText={text => setPassword(text)}
                            style={[styles.inpuBoxText,]}
                            secureTextEntry={isPasswordVisible ? true : false}
                        />
                        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                            <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'}
                                size={22} color={'#212529'} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                    </View>

                </View>

                <TouchableOpacity onPress={() => {
                    if (email !== '' && password !== '') {
                        adminLogin();
                    } else {
                        alert("Please Enter Data")
                    }
                }}
                    style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>LOGIN</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
        backgroundColor: '#E9ECEF'
    },
    loginText: {
        fontFamily: 'Sono-SemiBold',
        fontSize: 30,
        color: '#212529',
        textDecorationLine: 'underline',
    },
    bgContanier: {
        marginVertical: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formBox: {
        marginTop: -50,
        width: '95%',
        borderRadius: 10,
        backgroundColor: 'rgba(127,127,127,0.5)',
        // height: 200
        padding: 20,
        alignItems: 'center'
    },
    customInput: {
        width: '95%',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F9FA'

    },
    inpuBoxText: {
        flex: 1,
        fontSize: 17,
        fontFamily: 'Sono-SemiBold',
        color: '#212529'
    },
    loginButton: {
        width: '50%',
        borderRadius: 10,
        borderWidth: .5,
        backgroundColor: '#343A40',
        paddingVertical: 15,
        marginTop: 20,
        alignItems: 'center',
        elevation: 5
    },
    loginButtonText: {
        fontSize: 20,
        fontFamily: 'Sono-SemiBold',
        color: '#F8F9FA'
    }
})