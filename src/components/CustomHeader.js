import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {appLogo} from '../assets/svgs';

const CustomHeader = ({title}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <SvgXml style={styles.icon} width={50} height={50} xml={appLogo}/>
            {/* <Icon
                style={styles.icon}
                type='Ionicons'
                onPress={() => { props.navigation.openDrawer() }}
                name="menu" size={30} color="#000" /> */}
        </View>
    );

};

export default CustomHeader;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
    },
    title: {
        // flex: 1,
        color: '#1E281E',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: 'IRANSansWeb(FaNum)',
    },
    icon: {
        marginHorizontal: 15,
    },
});
