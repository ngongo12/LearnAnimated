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
const ICON_SIZE = width / 15;
const styles = StyleSheet.create({
    image: {
        resizeMode: 'center',
        height: ICON_SIZE,
        width: ICON_SIZE,
        margin: 10
    },
    icon: {
        padding: 10,
        margin: 10,
        backgroundColor: 'darkgrey',
        borderRadius: 100
    }
});
