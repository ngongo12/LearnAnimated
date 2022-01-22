import { View, Text, Easing } from 'react-native';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import List from './components/List';
import Details from './components/Details';

enableScreens();

const Stack = createSharedElementStackNavigator();

const index = (props: any) => {
  return (
    <Stack.Navigator initialRouteName='List' screenOptions={{headerShown: false}} >
      <Stack.Screen name='List' component={List} />
      <Stack.Screen name='Details' component={Details}
        options={()=>({
          gestureEnabled: false,
          transitionSpec: {
            open: {animation: 'timing', config: {duration: 600, easing: Easing.inOut(Easing.ease)}},
            close: {animation: 'timing', config: {duration: 600, easing: Easing.inOut(Easing.ease)}},
          },
          cardStyleInterpolator: ({current: {progress}}) => ({
            cardStyle: {
              opacity: progress
            }
          })
        })}
       />
      </Stack.Navigator>
  );
};

export default index;
