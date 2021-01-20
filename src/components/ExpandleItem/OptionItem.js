import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

export default function OptionItem({ item, index, onPress }) {
    console.log('OptionItem', item)
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
        </Pressable>
    );
};



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        height:50,
        // margin: 10,
        flex: 1
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
        fontSize: 10,
        // color: Constants.Colors.primaryDarkText,
        textAlign: 'center',
    },

});
