import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import PatternBackground from '../components/PatternBackground';
import {SvgXml} from 'react-native-svg';
import CategoryGridItem from '../components/CategoryGridItem';
import CustomHeader from '../components/CustomHeader';
import SQLite from 'react-native-sqlite-storage';
import {acceptDisable, gridMode, listMode} from '../assets/svgs';
import CategoryRowItem from '../components/CategoryRowItem';
import FormItem from '../components/FormItem';

const CategoriesScreen = (props) => {

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [gridList, setGridList] = useState(true);

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
            tx.executeSql('SELECT * FROM category;', [], (tx, results) => {
                const rows = results.rows;
                let categories = [];
                for (let i = 0; i < rows.length; i++) {
                    categories.push({
                        ...rows.item(i),
                    });
                }
                setList(categories);
                setLoading(false);
            });
        });
    }, []);

    function changeMenuButton() {
        // console.log(gridList);
        // alert(gridList)
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
        if (gridList) {
            setGridList(false);
        } else {
            setGridList(true);
        }
    }

    return (
        <PatternBackground>
            <CustomHeader title={'شاخصه های اصلی'}/>
            {loading ?
                <View style={styles.loadingContainer}>
                    <ActivityIndicator color='black' size='large'/>
                </View>
                :
                <View>
                    {gridList ?
                        <FlatList
                            data={list}
                            numColumns={2}
                            key={'_'}
                            style={styles.container}
                            contentContainerStyle={styles.contentContainerStyle}
                            emptyListComponent={<View><ActivityIndicator/></View>}
                            keyExtractor={(item, index) => '_' + index.toString()}
                            renderItem={({item, index}) => (
                                <CategoryGridItem item={item} index={index}
                                                  onPress={() => props.navigation?.navigate('Forms', {categoryId: item.id})}/>
                            )}
                        />
                        :
                        <FlatList
                            data={list}
                            key={'#'}
                            numColumns={1}
                            style={styles.container}
                            contentContainerStyle={styles.contentContainerStyle}
                            emptyListComponent={<View><ActivityIndicator/></View>}
                            keyExtractor={(item, index) => '#' + index.toString()}
                            renderItem={({item, index}) => (
                                <CategoryRowItem item={item} index={index}
                                                 onPress={() => props.navigation?.navigate('Forms', {categoryId: item.id})}/>
                            )}
                        />
                    }
                    <View
                        style={styles.icon}>
                        {gridList ?
                            <SvgXml
                                width={40}
                                height={40}
                                xml={listMode}
                                onPress={() => changeMenuButton()}
                                // onPress={() => changeMenuButton()} style={styles.logoStyle} width={100}
                            /> :
                            <SvgXml
                                onPress={() => changeMenuButton()}
                                width={40}
                                height={40}
                                xml={gridMode}
                            />
                        }
                    </View>
                </View>
            }
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
    loadingContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    icon: {
        width: 70,
        height: 70,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: '#5DA071',
        alignItems: 'center',
        position: 'absolute',
        marginLeft: 25,
        bottom: 100,
        // padding: 10,
        // right: 10,

        justifyContent: 'space-around',
        // marginTop: 100,
        // flexDirection: 'row',
    },
});


