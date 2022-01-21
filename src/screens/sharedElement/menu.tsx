import { Pressable, StyleSheet, Text, FlatList } from 'react-native';
import React from 'react';
import { navigate } from 'components/navigationRef';

const data = [
    {
        name: 'Episode 1',
        component: 'Episode_1',
        color: 'blue'
    }
]

const menu = () => {
  return (
    <FlatList
      data={data}
      renderItem={Item}
    />
  );
};

const Item = ({item}: any) => {
    
    return (
        <Pressable style={styles.container} onPress={() => navigate(item?.component, undefined)} >
            <Text style={[styles.text, { color: item?.color }]}>{item.name}</Text>
        </Pressable>
    );
}

export default menu;

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
});
