import { StyleSheet, View, Image, Dimensions } from 'react-native';
import React from 'react';

const Icon = ({ item }: any) => {
    return (
        <View
            style={styles.icon}
        >
            <Image source={item.image} style={styles.image} />
        </View>
    );
};

export default Icon;
const { width, height } = Dimensions.get('window');
export const ICON_SIZE = width / 15;
export const SPACING = 10;
const styles = StyleSheet.create({
    image: {
        resizeMode: 'center',
        height: ICON_SIZE,
        width: ICON_SIZE,
        margin: SPACING
    },
    icon: {
        padding: SPACING,
        margin: SPACING,
        backgroundColor: 'darkgrey',
        borderRadius: 100
    }
});
