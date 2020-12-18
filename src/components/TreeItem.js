import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import PatternBackground from '../components/PatternBackground';
import {logoWhite} from '../assets/svgs';
// import {SvgXml} from 'react-native-svg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const FormItem = ({item, index, onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.row}>{index + 1}</Text>
                {/*<SvgXml style={styles.logoStyle} width={50} height={50} xml={logoWhite}/>*/}
            </View>
        </TouchableWithoutFeedback>
    );
};

export default FormItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        alignSelf: 'center',
        marginTop: 10,
        width: '100%',
    },
    logoStyle: {
        alignSelf: 'center',
    }, title: {
        alignSelf: 'center',
        marginTop: 15,
        fontSize: 17,
        color: 'blue',
        fontWeight: '400',
    },
    row: {
        alignSelf: 'flex-start',
        marginTop: 15,
        fontSize: 17,
        color: 'purple',
        fontWeight: '400',
    },
});
