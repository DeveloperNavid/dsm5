import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import PatternBackground from '../components/PatternBackground';
import {SvgXml} from 'react-native-svg';
import {reject, accept} from '../assets/svgs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FormItem from '../components/FormItem';
import CustomHeader from '../components/CustomHeader';
import SQLite from 'react-native-sqlite-storage';

const FormsScreen = ({route, navigation}) => {

    const {list} = route.params;

    return (
        <PatternBackground>
            <CustomHeader title={'Forms'}/>
            <FlatList
                data={list}
                style={styles.list}
                emptyListComponent={<View><Text>بدون آیتم </Text></View>}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                    <FormItem item={item} index={index}
                              onPress={() => navigation?.navigate('Tree', {formId: item.id})}/>
                )}
            />
        </PatternBackground>
    );
};

export default FormsScreen;

const styles = StyleSheet.create({

    list: {
        marginHorizontal: 10,
    },
});


