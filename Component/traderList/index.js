// -----------Trade List Details Component-----------

import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList, SafeAreaView } from 'react-native';
import Layout from '../header/Layout';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import axios from 'axios';
import { TradListApi } from '../../utils';
import Expiretrade from '../expireTrade';
import Ongoingtrade from '../onGoingTrade';



const TradeList = (props) => {
    const [ongoing, setOnGoing] = useState(0);

    const [tradedetails, setTradeDetails] = useState([])

    useEffect(() => {
        tradeDetails()
    }, [])
    const tradeDetails = async () => {
        try {
            const formData = new FormData()
            formData.append('filters', 'ongoing')
            const data = await TradListApi(formData);
            // console.info("data+ ", typeof data.data.data)
            setTradeDetails(data.data.data)
        } catch (error) {
            // console.log('data trader detailsssssss=>>>', error.message)
        }
    }
    const tradeList = [
        {
            tradeName: 'XYZ Trade',
            date: '25-5-2022',
            type: 'Equity',
            Entry: '₹ 150',
            Exit: '₹ 350 - ₹ 550',
            StopLoss: '₹ 150',
            StockName: 'Relience',
            Action: 'Buy',
            Status: 'Open',
            Postedby: 'James S. Lawson'
        },
        {
            tradeName: 'XYZ Trade',
            date: '25-5-2022',
            type: 'Equity',
            Entry: '₹ 150',
            Exit: '₹ 350 - ₹ 550',
            StopLoss: '₹ 150',
            StockName: 'Relience',
            Action: 'Buy',
            Status: 'Open',
            Postedby: 'James S. Lawson'
        },
        {
            tradeName: 'XYZ Trade',
            date: '25-5-2022',
            type: 'Equity',
            Entry: '₹ 150',
            Exit: '₹ 350 - ₹ 550',
            StopLoss: '₹ 150',
            StockName: 'Relience',
            Action: 'Buy',
            Status: 'Open',
            Postedby: 'James S. Lawson'
        },
        {
            tradeName: 'XYZ Trade',
            date: '25-5-2022',
            type: 'Equity',
            Entry: '₹ 150',
            Exit: '₹ 350 - ₹ 550',
            StopLoss: '₹ 150',
            StockName: 'Relience',
            Action: 'Buy',
            Status: 'Open',
            Postedby: 'James S. Lawson'
        }
    ]


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
    return (
        <Layout pageTitle="Trade Recommendations" {...props}>
            <View style={styles.container}>

                <View style={styles.mainSection}>
                    <TouchableOpacity onPress={() => setOnGoing(0)} style={styles.selectionTrade}>
                        {
                            ongoing === 0 ? <LinearGradient
                                colors={['#00C8BC', '#03988F']} style={styles.linearGradient}>
                                <View style={styles.headerText}>
                                    <Text style={styles.headerTitle}>Ongoing Trades</Text>
                                </View>
                            </LinearGradient> : (<View>
                                <Text style={styles.headerTag}>Ongoing Trades</Text>
                            </View>)
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setOnGoing(1)} style={styles.selectionTrade}>
                        {
                            ongoing === 1 ? (<LinearGradient
                                colors={['#00C8BC', '#03988F']} style={styles.linearGradient}>
                                <View style={styles.headerText}>
                                    <Text style={styles.headerTitle}>Expired Trades</Text>
                                </View>
                            </LinearGradient>) : (<View>
                                <Text style={styles.headerTag}>Expired Trades</Text>
                            </View>)
                        }
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.search}>
                        <TouchableOpacity style={styles.searchContainer}>
                            <TextInput
                                placeholder='Search by stock or mentor name'
                                style={styles.searchStock}
                                placeholderTextColor={'#545454'}
                            />
                            <View style={styles.searchIcon}>
                                <Image
                                    style={{
                                        width: 16, height: 16
                                    }}
                                    source={require('../../assets/search.png')}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container}>
                    <View>
                        {/* {
                                ongoing == 0 ? <Ongoingtrade /> : <Expiretrade />
                            } */}

                        {
                            ongoing === 0 ? <Ongoingtrade /> : <Expiretrade />
                        }

                    </View>
                    {/* <FlatList
                            data={tradedetails}
                            renderItem={renderItem}
                        /> */}
                </View>
            </View>
        </Layout>
    );
};
export default TradeList;
