import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import PatternBackground from '../components/PatternBackground';
import { SvgXml } from 'react-native-svg';
import { reject,accept } from '../assets/svgs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FormItem from '../components/FormItem';
import CustomHeader from '../components/CustomHeader';
import SQLite from 'react-native-sqlite-storage';

const FormsScreen = ({ route, navigation }) => {

    const [list, setList] = useState([]);
    const { categoryId } = route.params;

    useEffect(() => {
        const db = SQLite.openDatabase(
            {
                name: 'dsm5.db',
                location: 'default',
                createFromLocation: '~www/dsm5.db',
            },
            () => {
            },
            error => {
                console.log(error);
            },
        );
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM form WHERE categoryId = ' + '\'' + categoryId + '\'', [], (tx, results) => {
                const rows = results.rows;
                let forms = [];
                for (let i = 0; i < rows.length; i++) {
                    forms.push({
                        ...rows.item(i),
                    });
                }
                setList(forms);
            });
        });
    }, []);


    return (
        <PatternBackground>
            <CustomHeader title={'فرم ها'} />
            <FlatList
                data={list}
                style={styles.list}
                emptyListComponent={<View><Text>بدون آیتم </Text></View>}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <FormItem item={item} index={index} onPress={() => navigation?.navigate('Tree')} />
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


