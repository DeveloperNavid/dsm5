import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import PatternBackground from '../components/PatternBackground';
import { logoWhite } from '../assets/svgs';
import { SvgXml } from 'react-native-svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Card from './Card';
const color = '#62BA7B'
const CategoryItem = ({ item, index, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Card style={styles.container}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.row}>{index + 1}</Text>
                </View>
                <SvgXml style={styles.logoStyle} fill={color} width={50} height={50} xml={item.source} />
            </Card>
        </TouchableWithoutFeedback>
    );
};

export default CategoryItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignSelf: 'center',
        marginVertical: hp('1%'),
        width: '100%',
    },
    logoStyle: {
        alignSelf: 'center',
    }, title: {
        alignSelf: 'center',
        fontSize: 17,
        color: 'blue',
        fontWeight: '400',
    },
    row: {
        alignSelf: 'flex-start',
        fontSize: 17,
        color: 'purple',
        fontWeight: '400',
    },
});
