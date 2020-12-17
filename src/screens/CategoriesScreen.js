import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import PatternBackground from '../components/PatternBackground';
import { SvgXml } from 'react-native-svg';
import { bipolar,schizophrenia,depression,stress,
romantic,anxiety,physical,eating,insomnia,solok,drug,
psychologist,asabiShenakhti,
} from '../assets/svgs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CategoryItem from '../components/CategoryItem';

const CategoriesScreen = (props) => {
    const tempList = [
         {
             id:1,
            source: bipolar,
            name: 'تابلو های بالینی عصبی_رشدی',
        },
        {
            id:2,
            source: schizophrenia,
            name: 'اسکیزو فرنی و دیگر تابلو های روان پریشی',
        },
        {
            id:3,
            source: bipolar,
            name: 'تابلو های بالینی دو قطبی',

        },
        {
            id:4,
            source: depression,
            name: 'تابلو های بالینی افسردگی',
        },
        {
            id:5,
            source: anxiety,
            name: 'تابلو های بالینی اضطراب',
        },
        {
            id:6,
            source: stress,
            name: 'تابلوهای بالینی مربوط به تروما و عوامل استرس زا',
        },
        {
            id:7,
            source: physical,
            name: 'تابلو های بالینی نشانه های جسمی',
        },
        {
            id:8,
            source: eating,
            name: 'تابلو های بالینی خوردن',
        },
        {
            id:9,
            source: insomnia,
            name: 'تابلو های بالینی خواب و بیداری',
        }, {
            id:10,
            source: romantic,
            name: 'تابلو های بالینی کژکاری جنسی',
        },{
            id:11,
            source: solok,
            name: 'تابلو های بالینی اختلالات ایذایی؛کنترل تکانه و سلوک',
        },{
            id:12,
            source: drug,
            name: 'تابلوهای بالینی مربوط به مواد',
        },{
            id:13,
            source: asabiShenakhti,
            name: 'تابلوهای عصبی_شناختی',
        },{
            id:14,
            source: psychologist,
            name: 'تابلوهایی با سبب شناسی طبی',
        },
    ];
    return (
        <PatternBackground>
            <View style={styles.container}>
                <SvgXml style={styles.logoStyle} width={100} height={100} xml={bipolar} />
                <Text style={styles.title}>شاخصه های اصلی</Text>
            </View>
            <FlatList
                data={tempList}
                style={{ paddingHorizontal: wp('2%') }}
                emptyListComponent={<View><Text>هنوز حسابی ایجاد نکرده اید</Text></View>}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <CategoryItem item={item} index={index} onPress={() => props.navigation?.navigate('Forms')} />
                )}
            />
        </PatternBackground>
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '100%',
        flex: 1,
        marginTop: hp('10%'),
    },
    logoStyle: {
        alignSelf: 'center',
    }, title: {
        alignSelf: 'center',
        fontSize: 19,
        color: 'black',
        fontWeight: '400',
    },
});


