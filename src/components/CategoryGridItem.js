import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import PatternBackground from '../components/PatternBackground';
import { logoWhite } from '../assets/svgs';
import { SvgXml } from 'react-native-svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Card from './Card';
const color = '#62BA7B'

const CategoryGridItem = ({ item, index, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <Card style={[styles.container, {
                borderRadius: 10
                // borderTopLeftRadius: index % 2 == 0 ? 30 : 5,
                // borderBottomLeftRadius: index % 2 == 0 ? 30 : 5,
                // borderTopRightRadius: index % 2 == 0 ? 5 : 30,
                // borderBottomRightRadius: index % 2 == 0 ? 5 : 30,
            }]}>
                <View style={styles.titleNoContainer}>
                    <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
                </View>
                <View>
                    <SvgXml style={styles.logoStyle} width={wp('35%')} height={150} xml={item.source} />
                    <View style={[styles.dot, { alignSelf: 'flex-start',marginTop:-15,marginBottom:5 }]}>
                        <Text style={styles.row}>{index + 1}</Text>
                    </View>
                </View>
            </Card>
        </Pressable>
    );
};

export default CategoryGridItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignSelf: 'center',
        marginVertical: wp('0.5%'),
        marginHorizontal: wp('0.5%'),
        width: wp('45%'),
        height: 240,//hp('30%'),
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
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'IRANSansWeb(FaNum)',
    },
    row: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'IRANSansWeb(FaNum)'
        // fontWeight: '400',

    },
});
