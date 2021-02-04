import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import PatternBackground from '../components/PatternBackground';
import { SvgXml } from 'react-native-svg';
import { logoWhite, appLogo } from '../assets/svgs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SQLite from 'react-native-sqlite-storage';

const SplashScreen = (props) => {

    useEffect(() => {
        const db = SQLite.openDatabase(
            {
                name: 'dsm5.db',
                location: 'default',
                createFromLocation: '~www/dsm5.db',
            }, () => {
            },
            error => {
                console.log(error);
            },
        );
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM category;', [], (tx, results) => {
                const rows = results.rows;
                let categories = [];
                for (let i = 0; i < rows.length; i++) {
                    categories.push({
                        ...rows.item(i),
                    });
                }
                for (let position in categories) {
                    let query: String = 'SELECT * FROM form WHERE categoryId = ' + '\'' + categories[position].id + '\'';
                    db.transaction(tx => {
                        tx.executeSql(query, [], (tx, results) => {
                            const rows = results.rows;
                            let forms = [];
                            for (let i = 0; i < rows.length; i++) {
                                forms.push({
                                    ...rows.item(i),
                                });
                            }
                            let category = categories[position];
                            Object.assign(category, { 'forms': forms });
                            categories[position] = category;
                            if (position == categories.length - 1) {
                                // console.log(categories);
                                props.navigation?.navigate('Categories', { list: categories });
                            }
                        });
                    });
                }
            });
        });
    }, []);

    return (
        <View style={styles.container}>
            {/* <SvgXml style={styles.logoStyle} width={200} height={200} xml={appLogo}/>
            <Text style={styles.title}>Differential Diagnosis Disorders</Text> */}
            <Image style={styles.logoImageStyle} resizeMode='contain' source={require('../assets/logopng.png')} />
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    logoImageStyle:{
        height:300,
        width:300,
        marginTop:-50,
        alignSelf: 'center',

    },
    container: {
        alignSelf: 'center',
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        flex: 1,
        // marginTop: hp('30%'),
    },
    logoStyle: {
        alignSelf: 'center',
    },
    title: {
        alignSelf: 'center',
        marginTop: 15,
        fontSize: 17,
        color: 'gray',
        fontWeight: 'bold',
        fontFamily: 'IRANSansWeb(FaNum)',
    },
});
