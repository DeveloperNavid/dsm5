import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {SvgXml} from 'react-native-svg';

const PatternBackground = props => {
    return (
        <ImageBackground style={styles.imageStyle} source={require('../assets/background.png')}>
            {props.children}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: wp('100%'),
        height: hp('100%'),
    },
});
export default PatternBackground;
