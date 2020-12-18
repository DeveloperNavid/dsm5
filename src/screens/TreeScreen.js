import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
import PatternBackground from '../components/PatternBackground';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomHeader from '../components/CustomHeader';

const TreeScreen = (props) => {

    return (
        <PatternBackground>
            <CustomHeader title={'درخت'} />

            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.title}>this is a question?</Text>
                </View>

                <View style={styles.buttonLayout}>
                    <Button title={'YES'} style={styles.button} onPress={() =>
                        getNextQuestion(true)
                    }/>
                    <Button title={'NO'} style={styles.button} onPress={() =>
                        getNextQuestion(false)
                    }/>
                </View>
            </View>
        </PatternBackground>
    );

    function getNextQuestion(answerStatus) {
        if (answerStatus) {
            //TODO:// get query for yesId,s tree
            alert('this is Yes answer');
        } else {
            //TODO:// get query for noId,s tree
            alert('this is No answer');

        }
    }
};

export default TreeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginLeft: 45,
        marginRight: 45,
        justifyContent: 'center',
    },
    title: {
        alignSelf: 'center',
        marginTop: 15,
        fontSize: 17,
        color: 'black',
        fontWeight: '400',
        fontFamily:'IRANSansWeb(FaNum)'
    },
    button: {
        padding: 100,
        width: 100,
        flex: 1,
    },
    buttonLayout: {
        justifyContent: 'space-around',
        backgroundColor: 'purple',
        marginTop: 100,
        flexDirection: 'row',
    },
});
