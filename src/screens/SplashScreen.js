import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import PatternBackground from '../components/PatternBackground';
import {SvgXml} from 'react-native-svg';
import {logoWhite} from '../assets/svgs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SplashScreen = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation?.navigate('Categories');
        }, 2000);
    }, []);

    return (
        <PatternBackground>
            <View style={styles.container}>
                <SvgXml style={styles.logoStyle} width={100} height={100} xml={logoWhite}/>
                <Text style={styles.title}>شناسایی اختلال dsm5</Text>
            </View>
        </PatternBackground>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '100%',
        flex: 1,
        marginTop: hp('30%'),
    },
    logoStyle: {
        alignSelf: 'center',
    }, title: {
        alignSelf: 'center',
        marginTop: 15,
        fontSize: 17,
        color: 'white',
        fontWeight: '400',
        fontFamily:'IRANSansWeb(FaNum)',

    },
});
