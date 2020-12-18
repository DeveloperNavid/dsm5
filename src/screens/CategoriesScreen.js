import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import PatternBackground from '../components/PatternBackground';
import {SvgXml} from 'react-native-svg';
import {
    bipolar, schizophrenia, depression, stress,
    romantic, anxiety, physical, eating, insomnia, solok, drug,
    psychologist, asabiShenakhti, asabiRoshdi,
} from '../assets/svgs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CategoryItem from '../components/CategoryItem';
import CustomHeader from '../components/CustomHeader';
import SQLite from 'react-native-sqlite-storage';


const CategoriesScreen = (props) => {

    const db = SQLite.openDatabase(
        {
            name: 'dsm5.db',
            location: 'default',
            createFromLocation: '~www/dsm5.db',
        },
        () => {
            console.log('YESSSSSSSSSSS');
        },
        error => {
            console.log(error);
        },
    );

    db.transaction(tx => {
        tx.executeSql('SELECT * FROM categories;', [], (tx, results) => {
            const rows = results.rows;
            for (let i = 0; i < rows.length; i++) {
                console.log(rows.item(i));
            }
        });
    });

    return (
        <PatternBackground>
            <CustomHeader title={'شاخصه های اصلی'}/>
            <FlatList
                data={tempList}
                numColumns={2}
                style={styles.container}
                contentContainerStyle={styles.contentContainerStyle}
                emptyListComponent={<View><ActivityIndicator/></View>}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                    <CategoryItem item={item} index={index} onPress={() => props.navigation?.navigate('Forms')}/>
                )}
            />
        </PatternBackground>
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
    container: {
        // alignItems:'center'
    },
    contentContainerStyle: {
        alignSelf: 'center',
    },
});


