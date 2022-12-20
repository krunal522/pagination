// -----------OnGoing Trade Screen Component-----------
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ToastAndroid, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import styles from './style';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { TradListApi } from '../../utils';


const Expiretrade = (props) => {

    const [tradedetails, setTradeDetails] = useState([])
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        tradeDetails()
    }, [])

    const toast = (msg) => {
        ToastAndroid.showWithGravity(
            msg,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    }

    const tradeDetails = async () => {
        try {
            const formData = new FormData()
            setLoading(true)
            formData.append('filters', 'ongoing')
            const data = await TradListApi(formData, 3, offset);
            setTradeDetails([...tradedetails, ...data.data.data])
            setOffset(offset + 3)
            if (data.data.data.length == 0) {
                setLoading = false;
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)

        }
    }
    const renderItem = ({ item }) => (
        <View style={styles.tradeSection}>

            <View style={styles.tradeNameContainer}>

                <Text style={styles.tradeName}>{item.user.name}</Text>
                <View style={styles.dateMain}>
                    <Text style={styles.tradeName}>{item.posted_date}</Text>
                    <View style={styles.rightArrow}>
                        <EvilIcons name="arrow-right" size={24} color="#fff" />
                    </View>
                </View>
            </View>
            <View style={styles.mainview}>
                <View style={styles.typeDetails}>
                    <Text style={styles.tradeType}>Type:</Text>
                    <View style={styles.typeshare}>
                        <Text style={styles.typesharedetails}>{item.type}</Text>
                    </View>
                </View>
                <View style={styles.typeDetails}>
                    <Text style={styles.tradeType}>Entry:</Text>
                    <View style={styles.typeshare}>
                        <Text style={styles.typesharedetails}>{item.entry_price}</Text>
                    </View>
                </View>
                <View style={styles.typeDetails}>
                    <Text style={styles.tradeType}>Exit:</Text>
                    <View style={styles.typeshare}>
                        <Text style={styles.typesharedetails}>{item.exit_price}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.mainview}>
                <View style={styles.typeDetails}>
                    <Text style={styles.tradeType}>Stop Loss:</Text>
                    <View style={styles.typeshare}>
                        <Text style={styles.typesharedetails}>{item.stop_loss_price}</Text>
                    </View>
                </View>
                <View style={styles.typeDetails}>
                    <Text style={styles.tradeType}>Stock Name:</Text>
                    <View style={styles.typeshare}>
                        <Text style={styles.typesharedetails}>{item.stock.substring(0, 15)}...</Text>
                    </View>
                </View>
                <View style={styles.typeDetails}>
                    <Text style={styles.tradeType}>Action:</Text>
                    <View style={styles.typeshare}>
                        <Text style={styles.typesharedetails}>{item.action}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.mainview}>
                <View style={styles.typeDetails}>
                    <Text style={styles.tradeType}>Status:</Text>
                    <View style={styles.statusOpen}>
                        <Text style={styles.textOpen}>{item.status}</Text>
                    </View>
                </View>
                <View style={styles.typeDetails}>
                    <Text style={styles.tradeType}>Postedby:</Text>
                    <View style={styles.postedMain}>
                        <Text style={styles.postedText}>{item.user.name}</Text>
                    </View>
                </View>
            </View>

        </View>
    );

    const renderFooter = () => {
        return (
            <View style={styles.footer}>
                {loading ? (
                    <ActivityIndicator color="black" style={{ margin: 15 }} />
                ) : null}
            </View>
        );
    };
    return (

        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={tradedetails}
                    ListFooterComponent={renderFooter}
                    renderItem={renderItem}
                    onEndReachedThreshold={5}
                    onEndReached={tradeDetails}
                    keyExtractor={(item, index) => index.toString()}
                />
            </SafeAreaView>
        </View>

    );
};
export default Expiretrade;
