import React from 'react'
import { View, FlatList, ActivityIndicator, Text } from 'react-native'
import OptionItem from './OptionItem'
import styles from './expandOptionsStyle'

export default function OptionsList({ list, navigation }) {
    return (
        <FlatList
            data={list}
            scrollEnabled={false}
            style={styles.flatListStyle}
            contentContainerStyle={styles.listContentContainerStyle}
            emptyListComponent={<View><ActivityIndicator /></View>}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <OptionItem item={item} index={index}
                    // onPress={() => navigation.navigate(item.screen)} />
                    onPress={() => {
                        // console.log("__selected expandable item is ",item)
                        navigation?.navigate('Tree', { formId: item.id })
                    }} />


            )}
        />
    )
}
