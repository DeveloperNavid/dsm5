import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const Card = props => {
    return (
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        // borderRadius: 10,
        elevation: 2,
    },
});
export default Card;
