import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, List, ListItem } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Today from './Today';
import Plus from './Plus';
import { createDrawerNavigator } from '@react-navigation/drawer';
import axios from "axios";
import Video from 'react-native-video';
const Drawer = createDrawerNavigator();


const image = { uri: "https://cdn.dribbble.com/users/1981645/screenshots/14604636/media/2366c1ff011caa52ab9d486538e3afb2.gif" };

export default class Actual extends React.Component {

    constructor(props){
        super(props);
        this.state={

            token:'6887ad9e8d1c10cc6351acc8a9051b06f6d6642fd2a94ad1ddd3f9f7c2879b9e',
            insee : '87085',
            result:null,
            now:'', 
            sun:'',
            weather : ''
        }

        this.getData()
    }

    getData(){
        
        axios.get(`https://api.meteo-concept.com/api/forecast/daily/0?token=${this.state.token}&insee=87085`)
        .then((response)=>{
            console.log('requette page actual :', response);
            let tmax = response.data.forecast.tmax;
            let tmin = response.data.forecast.tmin;
            let moy = (tmax + tmin)/2
            this.setState({ now: moy})
            console.log('temp moy :', this.state.now);
            this.setState({weather : response.data.forecast.weather})

            let climat = ''
            switch (this.state.weather){
                case 0 : climat = "Soleil"
                break;
                case 1 : climat = "Peu nuageux"
                break;
                case 2 : climat = "Ciel voilé"
                break;
                case 3 : climat = "Nuageux"
                break;
                case 4 : climat = "Très nuageux"
                break;
                case 5 : climat = "couvert"
                break;
                case 6 : climat= "brouillard"
                break;
                case 7 : climat = "Brouillard givrant"
                break;
                case 10 : climat = "Pluie faible"
                break;
                case 11 : climat = "Pluie modérée"
                break;
                case 12 : climat = "Pluie faible verglaçante"
                break;
                case 40 : climat = "Averses de pluie locales et faibles"
                break;
            }
            this.setState({sun: climat})
        })
    }

    render() {
      return (
        <Container>
           


        <View style={styles.container} >
        
            <ImageBackground source={image} style={styles.image}>
            <View style={{flex : 2}}>
            
            <Button style={{alignSelf : 'flex-end',marginTop:40, paddingHorizontal:15,opacity:0.5}} iconLeft rounded primary  onPress={() =>    this.props.navigation.navigate('Home') }>
            <Text style={{ color: 'white'}}>Back</Text>
            <Icon style={{ color: 'white'}} name='arrow-back' />
          </Button>

              <Text style={{ marginLeft : 15, fontSize: 90, color:'white' }}>{this.state.now}°</Text>
              <Text style={{marginLeft : 30, fontSize: 40, color:'white' }}>{this.state.sun}</Text>
              <Text style={{marginTop: 0,  marginLeft : 30, color:'white', fontSize: 18 }}>🏙 Limoges</Text>
              

         </View>
                
                   
                <Plus/>

            </ImageBackground>
        </View>

        </Container>
      );
  
      
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000a0"
    },
    listText:{
        color: "white",
        flexDirection: 'row',
        fontWeight : 'bold'

    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
  
    
  });
  
  