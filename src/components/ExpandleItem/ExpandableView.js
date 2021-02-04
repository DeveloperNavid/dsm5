import React, { useRef, useState } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
// import { arrowDown, arrowUp } from '../../../assets/svgs';
// import Constants from "../../../constants";
import OptionsList from './OptionsList';
import CategoryRowItem from '../CategoryRowItem'
const itemHeight = 50
const childItemHeight = 40

function ExpandableView({ list, navigation, item, index }) {
    // console.log('ExpandableView', item)
    // const { translations } = React.useContext(LocalizationContext);
    const [expand, setExpand] = useState(false);


    let heightRow1 = useRef(new Value(itemHeight));
    let childrenHeight = (item.forms.length) * childItemHeight + itemHeight

    React.useEffect(() => {
        toggleRow1Content()
    }, [])

    const toggleRow1Content = () => {
        if (!expand) {
            heightRow1.current = runTiming(new Clock(), new Value(itemHeight), new Value(childrenHeight));
        } else {
            heightRow1.current = runTiming(new Clock(), new Value(childrenHeight), new Value(itemHeight));
        }
        setExpand(!expand);
    };

    return (
        <View style={styles.container}>
            <Animated.View style={{ height: heightRow1.current }}>
                <Animated.ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false}>
                    <Pressable onPress={() => toggleRow1Content()}>
                        <CategoryRowItem item={item} index={index} />
                    </Pressable>
                    <OptionsList list={item.forms} navigation={navigation} />
                </Animated.ScrollView>
            </Animated.View>
        </View>
    )


    function more() {
        return (
            <View style={styles.moreRowContainer}>
                {/* <View style={styles.dashedLine} />
                <MoreButton
                    onPress={() => {
                        // ref.current.animateNextTransition()
                        // setExpand(!expand)
                        // toggleContent();
                        // pleaseChangeTheState()
                        toggleRow1Content()
                    }
                    }
                    hasIcon icon={expand ? arrowUp : arrowDown}
                    text={expand ? translations.home.less : translations.home.more}
                    small style={styles.moreButton} />
                <View style={styles.dashedLine} /> */}
            </View>
        )
    }
}


const {
    set,
    cond,
    startClock,
    stopClock,
    clockRunning,
    block,
    timing, //Updates position node by running timing based animation from a given position to a destination determined by toValue. The animation is expected to last duration milliseconds and use easing function that could be set to one of the nodes exported by the Easing object. The frameTime node will also get updated and represents the progress of animation in milliseconds (how long the animation has lasted so far), similar to the time node that just indicates the last clock time the animation node has been evaluated. Both of these variables are expected to be reset before restarting the animation. Finally finished node will be set to 1 when the position reaches the final value or when frameTime exceeds duration.
    debug,
    Value,
    Clock, //animated node , the value it returns is the current frame timestamp in milliseconds
} = Animated;


function runTiming(clock, value, dest) {
    const state = {
        finished: new Value(0),
        position: value, //from position given by value
        time: new Value(0),
        frameTime: new Value(0), //frameTime node will also get updated and represents the progress of animation in milliseconds (how long the animation has lasted so far)
    };

    const config = {
        duration: 500, //animation duration
        toValue: dest, //to position given by dest
        easing: Easing.inOut(Easing.cubic), //easing function
    };
    //block nodes can be used if we want to execute several nodes (commands) in a specific sequence

    return block([
        //check if clock is running already, if not we set variables and start clock
        cond(clockRunning(clock), 0, [
            //cond nodes are equivalent of if ... else
            set(state.finished, 0), //set nodes are equivalent of =
            set(state.time, 0),
            set(state.position, value),
            set(state.frameTime, 0),
            set(config.toValue, dest),
            startClock(clock),
        ]),
        timing(clock, state, config), //here we start animation using timing which takes state and config variables
        // cond(!state.finished, debug('animation running')),
        cond(state.finished, debug('stop clock', stopClock(clock))), //if animation is finished ,we stop clock
        state.position, //return position of animated variable which will map to this.heightIncrease
    ]);
}

const styles = StyleSheet.create({
    transitionContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    container: {
        width: '100%',
        // margin: 10,
        marginTop: 5,
        // height:150,
        overflow: 'hidden',
        // backgroundColor:'green'
    },
    titleContainer: {
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        padding: 10,
        color: '#2a2f43',
        fontWeight: 'bold'
    },
    button: {

    },
    buttonImage: {
        width: 30,
        height: 25
    },
    body: {
        padding: 10,
        paddingTop: 0
    },
    moreRowContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        // backgroundColor:'pink'
    }, dashedLine: {
        // height:10,
        // borderColor: 'gray',
        // borderWidth: 0.5,
        // borderStyle: 'dashed',
        // backgroundColor:'yellow',
        flex: 2,
        marginHorizontal: 2,
        // borderBottomWidth:1,
        borderRadius: 1,
        marginLeft: 3
    }, moreButton: {
        flex: 1.8
    }
});

export default ExpandableView;