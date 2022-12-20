// -----------Login Screen  Component-----------
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import { CountryPicker } from "react-native-country-codes-picker";
import { loginApi } from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const LoginScreen = (props) => {

    const [show, setShow] = useState(false);
    const [mobile, setMobileNumber] = useState('')
    const [countryCode, setCountryCode] = useState('+91');

    const onChangePhoneNumber = (text) => {
        setMobileNumber(text)
    }

    const toast = (msg) => {
        ToastAndroid.showWithGravity(
            msg,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    }

    const login = async () => {
        if (!mobile.length) {
            toast('Mobile Number Required')

        } else {
            try {
                const formData = new FormData()
                formData.append('mobile', mobile)
                formData.append('country_code', '+91')
                formData.append('otp', '06729')
                formData.append('device_id', 'N832948jdshjsi23478923')
                formData.append('device_type', 'android')

                const data = await loginApi(formData);
                console.log('Login Response dataaaaa=>!!!!', data.data.data.token)
                if (data.status !== 'failed') {
                    await AsyncStorage.setItem('userData', JSON.stringify(data.data.data.token));
                    props.navigation.navigate('Traderdetails');
                    toast('You Have Sucessfully Login')
                    setMobileNumber('')
                } else {
                    toast('Login Failed')
                }
            }
            catch (error) {
                setMobileNumber('')
                toast('Login Failed')
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainlogo}>
                <View style={styles.imageView}>
                    <Image style={styles.finowiseimg} source={require('../../assets/finowise.png')} />
                </View>
            </View>
            <View style={styles.loginDetails}>
                <KeyboardAwareScrollView>
                    <View style={styles.mainMobile}>
                        <Text style={styles.mobileNo}>Mobile number</Text>
                        <View style={styles.mainMobileInput}>
                            <View style={styles.codeStyle}>
                                <Image style={styles.flagimg} source={require('../../assets/flag.png')} />
                                <TouchableOpacity
                                    style={styles.countryMainPicker}
                                    onPress={() => setShow(true)}
                                >
                                    <Text style={styles.countryCode}>
                                        {countryCode}
                                    </Text>
                                    <View style={styles.downArrow}>
                                        <Image source={require('../../assets/downarrow.png')} />
                                    </View>

                                    <CountryPicker
                                        initialState={'+91'}
                                        show={show}
                                        // when picker button press you will get the country object with dial code
                                        pickerButtonOnPress={(item) => {
                                            setCountryCode(item.dial_code);
                                            setShow(false);
                                        }}
                                    />

                                </TouchableOpacity>
                            </View>
                            <View style={styles.textInputMainDesign}>
                                <TextInput
                                    value={mobile}
                                    maxLength={10}
                                    keyboardType="numeric"
                                    onChangeText={text => onChangePhoneNumber(text)}
                                    style={styles.textInput}
                                    placeholder="Phone No"
                                    placeholderTextColor='#A5A5A5'
                                />
                            </View>
                        </View>

                        <TouchableOpacity onPress={login} style={styles.signUp}>
                            <Text style={styles.signUpText}>Sign Up</Text>
                        </TouchableOpacity>
                        <View style={styles.withMain}>
                            <View style={styles.lineHeight}></View>
                            <Text style={styles.withText}>With</Text>
                            <View style={styles.lineHeight}></View>
                        </View>
                        <TouchableOpacity style={styles.googleLogin}>
                            <View>
                                <View style={styles.googleLogo}>
                                    <Image source={require('../../assets/google.png')} />
                                </View>
                                <Text style={styles.googleText}>Google</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </View>
    );
};
export default LoginScreen;
