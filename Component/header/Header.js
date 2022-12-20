import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        padding: 12,
        backgroundColor: '#00C8BC',
    },
    itemContainers: {
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
    },
    headerTitle: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 18,
        marginLeft: 72,
        fontFamily: 'Poppins'
    },
    headerImage: {
        width: 28,
        height: 28
    },
    searchcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        alignContent: 'center',
    },
    imgHeader: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 26
    }
});
export default function Header(props) {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.itemContainers}>
                    <Text style={styles.headerTitle}>{props.pageTitle}</Text>
                </View>
                <View style={styles.imgHeader}>
                    <TouchableOpacity>
                        <Image style={styles.headerImage} source={require('../../assets/filtericon.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
