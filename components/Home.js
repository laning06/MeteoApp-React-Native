import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet, View  } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Today from "./Today";
import Plus from "./Plus";

const Tab = createMaterialTopTabNavigator();

const image = { uri: "https://reactjs.org/logo-og.png" };

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
            <Text  style={{paddingTop: 25, fontSize: 20, fontWeight: 'bold'}}>22 °C</Text>
                <Thumbnail source={{uri: 'https://i.pinimg.com/564x/f5/6c/0b/f56c0bc9091fcd7d28739d9c39557851.jpg'}} style={{width: 30, height: 30, marginTop: 25, marginLeft: 5}} />
              </Left>
              <Right>
              <Body>
                  <Text style={{paddingTop: 25, fontSize: 20, fontWeight: 'bold'}}>Limoges</Text>
                </Body>
              </Right>

            </CardItem>
            <CardItem cardBody>
            <Image source={{uri: 'https://i.pinimg.com/564x/5a/20/19/5a201929aa60ce5006b6d958093bc335.jpg'}} style={{height: 300, width: null, flex: 1}}/>     
           </CardItem>
          </Card>
        </Content>
        <NavigationContainer>
            <Tab.Navigator swipeEnabled={false}>
                <Tab.Screen name="Today" component={Today} />
                <Tab.Screen name="Plus" component={Plus} />
            </Tab.Navigator>
        </NavigationContainer>
      </Container>
 
    );

    
  }
}

const stylesD = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    }
  });