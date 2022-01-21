import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import { navigate } from 'components/navigationRef';

const MenuButton = (props: any) => {
    const { item } = props;
    return (
        <Pressable style={styles.container} onPress={() => navigate(item?.component, undefined)} >
            <Text style={[styles.text, { color: item?.color }]}>{item.name}</Text>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})
export default MenuButton;
