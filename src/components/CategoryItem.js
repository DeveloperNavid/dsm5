import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PatternBackground from '../components/PatternBackground';
import { logoWhite } from '../assets/svgs';
import { SvgXml } from 'react-native-svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Card from './Card';
const color = '#62BA7B'

const CategoryItem = ({ item, index, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{

        }}>
            <Card style={[styles.container, {
                borderTopLeftRadius: index % 2 == 0 ? 30 : 5,
                borderBottomLeftRadius: index % 2 == 0 ? 30 : 5,
                borderTopRightRadius: index % 2 == 0 ? 5 : 30,
                borderBottomRightRadius: index % 2 == 0 ? 5 : 30,
            }]}>
                <View style={styles.titleNoContainer}>
                    <View style={[styles.dot, { alignSelf: index % 2 != 0 ? 'flex-end' : 'flex-start' }]}>
                        <Text style={styles.row}>{index + 1}</Text>
                    </View>
                    <Text numberOfLines={2} style={styles.title}>{item.name}</Text>
                </View>
                <SvgXml style={styles.logoStyle} width={150} height={150} xml={item.source} />
            </Card>
        </TouchableOpacity>
    );
};

export default CategoryItem;

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        alignSelf: 'center',
        marginVertical: wp('0.5%'),
        marginHorizontal: wp('0.5%'),
        width: wp('45%'),
        height: hp('30%'),
        paddingTop: wp('2%'),
        paddingHorizontal: wp('1%'),
        justifyContent: 'space-between',

    },
    dot: {
        backgroundColor: '#5DA071',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',


    },
    titleNoContainer: {
        // flexDirection:'row'
    },
    logoStyle: {
        alignSelf: 'center',
    }, title: {
        alignSelf: 'center',
        fontSize: 14,
        color: 'gray',
        fontWeight: '400',
        textAlign: 'center',
        fontFamily:'IRANSansWeb(FaNum)',
    },
    row: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        fontFamily:'IRANSansWeb(FaNum)'
        // fontWeight: '400',

    },
});
