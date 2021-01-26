import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

export default function OptionItem({ item, index, onPress }) {
    // console.log('OptionItem', item)
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
            <Text numberOfLines={1} style={styles.rowNumber}>{`${index + 1} - ${item.categoryId}`}</Text>
        </Pressable>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // backgroundColor: 'yellow',
        marginVertical: 5,
        marginRight: 15,
        height: 30,
        // margin: 10,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignContent: 'center'
    },
    card: {
        width: 60,
        height: 60,
        borderRadius: 13,
        alignSelf: 'center',
    },
    linearGradient: {
        flex: 1,
        borderRadius: 13,
        justifyContent: 'center',

    },
    icon: {
        alignSelf: 'center',
        fontSize: 36,
        // color: Constants.Colors.primaryText
    }, title: {
        alignSelf: 'center',
        fontSize: 14,
        marginHorizontal: 3,
        fontFamily: 'IRANSansWeb(FaNum)',
        fontWeight: 'bold',
        // color: Constants.Colors.primaryDarkText,
        textAlign: 'right',
    }, rowNumber: {
        alignSelf: 'center',
        fontSize: 14,
        marginHorizontal: 3,
        // fontWeight: 'bold',
        fontFamily: 'IRANSansWeb(FaNum)',
        color: '#030303',
        // backgroundColor:'#5DA071',
        textAlign: 'right',
        // width
    },

});
