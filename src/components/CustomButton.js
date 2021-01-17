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
        height: 85,
        width: 85,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    appButtonText: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
        fontFamily: 'IRANSansWeb(FaNum)',
    },
});

