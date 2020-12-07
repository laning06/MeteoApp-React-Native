import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Home2 from './components/Home2';
import Today from './components/Today';
import Actual from './components/Actual';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home2" 
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home"  component={Home2} />
        <Stack.Screen name="Actual" component={Actual} />
      </Stack.Navigator>
    </NavigationContainer>
      
    );
  }
}