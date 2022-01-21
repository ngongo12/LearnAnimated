import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { goBack } from './navigationRef';

const BackIcon = (props: any) => {
    const { onPress = goBack } = props;
    return (
        <AntDesign
            name='arrowleft'
            size={24}
            style={{ padding: 12 }}
            color='#333'
            onPress={onPress}
        />
    );
};

export default BackIcon;

const styles = StyleSheet.create({});
