import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
  LogBox
} from 'react-native';
import { navigationRef } from 'components/navigationRef';
import sharedElement from 'screens/sharedElement';
import MenuScreen from 'screens/MenuScreen';

const Stack = createNativeStackNavigator();
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
const App = () => {

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={
          {
            headerShown: false
          }
        }
      >
        <Stack.Screen
          name='MenuScreen'
          component={MenuScreen}
        />
        <Stack.Screen
          name='LearnSharedElement'
          component={sharedElement}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
