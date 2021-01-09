import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomHeader = ({title, onPress, buttonColor}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer, {
            backgroundColor: buttonColor,
        }]}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );

};

export default CustomHeader;

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        height: 55,
        width: 100,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    appButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
});

