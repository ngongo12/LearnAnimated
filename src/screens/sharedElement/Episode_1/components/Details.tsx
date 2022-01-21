import { FlatList, StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackIcon from 'components/BackIcon';
import { DATA } from './travel';
import Icon from './Icon';
import { SharedElement } from 'react-navigation-shared-element';

const { width } = Dimensions.get('window');
const Details = ({ navigation }: any) => {
    const item = DATA[0];
    const ref = useRef();
    const selectedItemIndex = DATA.findIndex((i) => i.id === item.id);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BackIcon />
            <View style={{
                flexDirection: 'row',
                flexWrap: 'nowrap',
                marginVertical: 20
            }}
            >
                {DATA.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => { }}
                    >
                        <SharedElement id={`item.${item.id}.icon`}>
                        <Icon

                            item={item}
                        />
                        </SharedElement>
                    </TouchableOpacity>
                ))}
            </View>
            <FlatList
                ref={ref}
                data={DATA}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                initialScrollIndex={selectedItemIndex}
                nestedScrollEnabled
                getItemLayout={(data, index) => ({
                    length: width,
                    offset: width * index,
                    index
                })}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{
                            width: width - 20,
                            margin: 10,
                            backgroundColor: 'rgba(0,0,0,0.05)',
                            borderRadius: 15,

                        }}>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 16 }}>
                                {
                                    Array(50).fill(`${item.title} content text \n`)
                                }
                            </Text>
                        </View>
                    </ScrollView>
                )}
            />
        </SafeAreaView>
    );
};

export default Details;

const styles = StyleSheet.create({});
