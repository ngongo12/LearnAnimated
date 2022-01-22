import { StyleSheet, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { DATA, SLIDER_DATA } from './travel';
import { SafeAreaView } from 'react-native-safe-area-context';
import MarketingSlider from './MarketingSlider';
import Icon from './Icon';
import { SharedElement } from 'react-navigation-shared-element';


const List = ({ navigation }: any) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MarketingSlider />
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 20
                }}>
                {
                    DATA.map(item => (
                        <TouchableOpacity
                            onPress={() => { navigation.push('Details', { item }) }}
                            key={item.id}
                        >
                            <SharedElement id={`item.${item.id}.icon`}>
                            <Icon
                                item={item}
                            />
                            </SharedElement>
                        </TouchableOpacity>
                    ))
                }
            </View>

        </SafeAreaView>
    );
};

export default List;


const styles = StyleSheet.create({

});
