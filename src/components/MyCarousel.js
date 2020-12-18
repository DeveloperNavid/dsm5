import React, {useCallback, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Image} from 'react-native-svg';

const MyCarousel = (props) => {

    const ref = React.useRef(null);

    const renderItem = useCallback(({item, index}) => {
        return (
            <View style={{
                backgroundColor: 'floralwhite',
                borderRadius: 5,
                height: 250,
                padding: 50,
                marginLeft: 25,
                marginRight: 25,
            }}>
                <Text style={styles.title}>{item.name}</Text>
                <Image>{item.picture}</Image>
            </View>
        );
    }, []);


    // const renderItem = ({item, index}) => {
    //     return (
    //         <View style={styles.slide}>
    //             <Text style={styles.title}>{item.title}</Text>
    //         </View>
    //     );
    // };

    return (
        <View style={styles.container}>
            <Carousel
                // ref={(c) => {
                //     _carousel = c;
                // }}
                ref={ref}
                data={props.data}
                renderItem={renderItem}
                // renderItem={(item, index) => renderItem()}
                sliderWidth={300}
                itemWidth={300}
            />
        </View>
    );
};

export default MyCarousel;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '100%',
        flex: 1,
        backgroundColor: 'pink',
    },
    slide: {
        alignSelf: 'center',
        width: hp('85%'),
        height: hp('40%'),
        backgroundColor: 'white',
        // flex: 1,
        // marginTop: hp('30%'),
    },
    logoStyle: {
        alignSelf: 'center',
    }, title: {
        alignSelf: 'center',
        marginTop: 15,
        fontSize: 17,
        color: 'black',
        fontWeight: '400',
    },
});
