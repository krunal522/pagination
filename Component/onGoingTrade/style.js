/** ongoing Trade Details screen  page Style  */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',

    },
    mainSection: {
        // backgroundColor: '#FFFFFF',
        width: 335,
        height: 48,
        borderRadius: 90,
        alignSelf: 'center',
        marginTop: 14,
        flexDirection: 'row',
        elevation: 3,
    },
    selectionTrade: {
        width: 161,
        height: 38,
        borderRadius: 90,
        marginHorizontal: 4,
        marginVertical: 5,
    },
    linearGradient: {
        flex: 1,
        borderRadius: 90,
    },
    headerTitle: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'Poppins',
        color: '#FFFFFF',
    },
    headerText: {
        textAlign: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: 8,
    },
    expireTrade: {
        width: 161,
        height: 38,
        borderRadius: 90,
        marginVertical: 5,
    },
    headerTag: {
        textAlign: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: 8,
        fontFamily: 'Poppins',
    },
    search: {
        width: 335,
        height: 48,
        marginVertical: 13,
        backgroundColor: '#F6F6F6',
        alignSelf: 'center',
        borderRadius: 10
    },
    searchContainer: {
        borderColor: 'gray',
        flexDirection: 'row',
    },
    searchTitle: {
        fontWeight: '400',
        fontFamily: 'Poppins',
        fontSize: 15,
        lineHeight: 23,
        textAlign: 'center',
    },
    searchIcon: {
        alignSelf: 'center',
        justifyContent: 'flex-end',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        marginRight: 16
    },
    searchStock: {
        marginLeft: 15,
        width: '70%',
        fontWeight: '400',
        fontSize: 15,
        fontFamily: 'Poppins'
    },
    tradeSection: {
        width:'94%',
        // width: 335,
        height: 220,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        shadowColor: '#52006A',
        elevation: 10,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        alignSelf: 'center',
        marginVertical: 12,
    },
    tradeNameContainer: {
        backgroundColor: '#00C8BC',
        borderBottomWidth: 1,
        borderColor: 'white',
        width:'100%',
        // width: 335,
        height: 34,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        flexDirection: 'row'
    },
    tradeName: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 22,
        fontFamily: 'Poppins',
        marginHorizontal: 13,
        marginVertical: 5
    },
    dateMain: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        display: 'flex',
        flex: 1
    },
    dateText: {
        color: '#FFFFF',
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 22,
        fontFamily: 'Poppins',
        marginHorizontal: 13,
        marginVertical: 5,
    },
    rightArrow: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 13,
    },
    typeDetails: {
        marginTop: 14,
        width: '33%'
    },
    tradeType: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 15,
        color: '#888888'
    },
    typeshare: {
        marginVertical: 3
    },
    typesharedetails: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 14
    },
    mainview: {
        flexDirection: 'row',
        marginHorizontal: 11,
    },
    statusOpen: {
        width: '80%',
        height: 20,
        borderRadius: 90,
        justifyContent: 'center',
        backgroundColor: '#00bdb11a',
        marginVertical: 3
    },
    textOpen: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        color: '#00C8BC',
        fontWeight: '600',
    },
    postedMain: {
        width: '10%',
        width: 136,
        height: 23,
        borderRadius: 90,
        justifyContent: 'center',
        backgroundColor: '#00bdb11a',
        marginVertical: 3,
    },
    postedText: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        color: '#00C8BC',
        fontWeight: '600',
    },
    footer: {
        // padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

});
export default styles;