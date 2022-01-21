import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { SLIDER_DATA } from './travel';

const { width, height } = Dimensions.get('window');
const ITEM_WITDH = width * 0.5;
const SPACING = 20;

const MarketingSlider = () => {
    console.log('MarketingSlider')
    return (
        <FlatList
            data={SLIDER_DATA}
            keyExtractor={(item) => item.color}
            horizontal
            snapToInterval={ITEM_WITDH + SPACING * 2}
            contentContainerStyle={{
                paddingRight: width - ITEM_WITDH - SPACING * 6,
            }}
            decelerationRate={'fast'}
            renderItem={({item}) => (
                <View style={[styles.itemContainer, {backgroundColor: item.color}]}>
                    <Text style={styles.itemText}>{item.title}</Text>
                </View>
            )}
            showsHorizontalScrollIndicator={false}
        />
    );
};

export default MarketingSlider;

const styles = StyleSheet.create({
    itemContainer: {
        borderRadius: 10,
        width: ITEM_WITDH,
        padding: 10,
        height: 100,
        margin: 10
    },
    itemText: {
        color: '#fff',
        fontSize: 16
    }
});
