import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PatternBackground from '../components/PatternBackground';
import { logoWhite } from '../assets/svgs';
// import {SvgXml} from 'react-native-svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Card from '../components/Card'
const FormItem = ({ item, index, onPress }) => {
    return (
        <Card style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.touch}>
                <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
                <View style={[styles.dot, { alignSelf: 'flex-end' }]}>
                    <Text style={styles.row}>{index + 1}</Text>
                </View>
            </TouchableOpacity>
        </Card>
    );
};

export default FormItem;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%',
        backgroundColor: 'white',
        borderBottomRightRadius: 20,
        borderTopRightRadius:5,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius:5,
    },
    touch: {
        // alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // backgroundColor: 'red'
    },
    dot: {
        backgroundColor: '#5DA071',
        width: 30,
        height: 30,
        borderRadius: 15,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',



    }, title: {
        alignSelf: 'center',
        fontSize: 14,
        color: 'gray',
        fontWeight: '400',
        textAlign: 'center',
        fontFamily: 'IRANSansWeb(FaNum)',
    },
    row: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'IRANSansWeb(FaNum)'
    },
});
