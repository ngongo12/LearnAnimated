import { FlatList, StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackIcon from 'components/BackIcon';
import { DATA } from './travel';
import Icon, { ICON_SIZE, SPACING } from './Icon';
import { SharedElement } from 'react-navigation-shared-element';

const { width } = Dimensions.get('window');
const Details = ({ navigation, route }: any) => {
    const { item } = route.params;
    const ref = useRef();
    const selectedItemIndex = DATA.findIndex((i) => i.id == item.id);
    const mountedAnimated = useRef(new Animated.Value(0)).current;
    const activeIndex = useRef(new Animated.Value(selectedItemIndex)).current;
    const activeIndexAnimation = useRef(new Animated.Value(selectedItemIndex)).current;

    const animation = (toValue: number, delay: number) => (
        Animated.timing(mountedAnimated, {
            toValue,
            duration: 500,
            delay,
            useNativeDriver: true
        })
    )
    useEffect(() => {
        Animated.parallel([
            Animated.timing(activeIndexAnimation, {
                toValue: activeIndex,
                duration: 300,
                useNativeDriver: true
            }),
            animation(1, 1000)
        ]).start()
    });

    const translateY = mountedAnimated.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 0],
    });
    const size = Math.round(ICON_SIZE + SPACING * 2);
    const translateX = activeIndexAnimation.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [size, 0, -size],
    })

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BackIcon
                onPress={() => {
                    animation(0, 100).start(() => {
                        navigation.goBack();
                    })
                }}
            />
            <Animated.View style={{
                flexDirection: 'row',
                flexWrap: 'nowrap',
                marginVertical: 20,
                marginLeft: width / 2 - ICON_SIZE / 2 - SPACING,
                transform: [{ translateX }]
            }}
            >
                {DATA.map((item, index) => {
                    const inputRange = [(index - 1) * size, index * size, (index + 1) * size];
                    const opacity = activeIndexAnimation.interpolate({
                        inputRange,
                        outputRange: [0.5, 1, 0.5]
                    })
                    return (
                        <TouchableOpacity
                            key={item.id}
                            style={{ alignItems: 'center' }}
                            onPress={() => {
                                activeIndex.setValue(index);
                                ref.current.scrollToIndex({
                                    index,
                                    animated: true
                                })
                            }}
                        >
                            <Animated.View style={{opacity}}>
                                <SharedElement id={`item.${item.id}.icon`}>
                                    <Icon
                                        item={item}
                                    />
                                </SharedElement>
                            </Animated.View>

                            <Text>{item.title}</Text>
                        </TouchableOpacity>
                    )
                })}
            </Animated.View>
            <Animated.FlatList
                style={{ opacity: mountedAnimated, transform: [{ translateY }] }}
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
                onMomentumScrollEnd={ev => {
                    const newIndex = Math.floor(ev.nativeEvent.contentOffset.x / width);

                    activeIndex.setValue(newIndex);
                }}
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

Details.sharedElements = (route: any, otherRoute: any, showing: boolean) => {
    //const {item} =route.params;
    return DATA.map(item => `item.${item.id}.icon`);
    //return [`item.${item.id}.photo`];
}

export default Details;

const styles = StyleSheet.create({});
