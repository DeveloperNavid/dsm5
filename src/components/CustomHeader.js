import * as React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import {
    bipolar, 
} from '../assets/svgs';

const CustomHeader = ({ title, }) => {

    return (
        <View  style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <SvgXml style={styles.icon} width={50} height={50} xml={bipolar} />
            {/* <Icon
                style={styles.icon}
                type='Ionicons'
                onPress={() => { props.navigation.openDrawer() }}
                name="menu" size={30} color="#000" /> */}
        </View>
    )

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
        color: 'gray',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize:16
    },
    icon: {
        marginHorizontal: 15
    }
})