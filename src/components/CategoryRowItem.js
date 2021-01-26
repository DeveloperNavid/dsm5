import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const CategoryGridItem = ({ item, index, onPress }) => {
    return (
        <Card style={styles.container}>
            <View onPress={onPress} style={styles.touch}>
                <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
                <Text style={styles.row}>{index + 1}</Text>
            </View>
        </Card>
    );
};

export default CategoryGridItem;

const styles = StyleSheet.create({
    parent: {},
    container: {
        // marginTop: 10,
        width: wp('92%'),
        backgroundColor: 'white',
        borderRadius:10
        // borderBottomRightRadius: 20,
        // borderTopRightRadius: 5,
        // borderTopLeftRadius: 20,
        // borderBottomLeftRadius: 5,
    },
    touch: {
        // alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 5,
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
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        color: 'black',
        fontFamily: 'IRANSansWeb(FaNum)',
    },
    row: {
        fontSize: 18,
        color: 'black',
        marginLeft: 10,
        textAlign: 'center',
        fontFamily: 'IRANSansWeb(FaNum)',
        alignSelf: 'flex-end',
    },
});
