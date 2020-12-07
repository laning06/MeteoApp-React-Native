import 'react-native-gesture-handler';
import React from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, List, ListItem } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Today from './Today';
import Plus from './Plus';
import axios from "axios";



const image = { uri: "https://i.pinimg.com/originals/14/ca/c1/14cac16105aeb50eefd9f33b278790f9.gif" };

export default class Home2 extends React.Component {


    constructor(props){
        super(props);

        this.state = {
            city: '',
            token:'6887ad9e8d1c10cc6351acc8a9051b06f6d6642fd2a94ad1ddd3f9f7c2879b9e',
            insee : '87085',
            result:null,
            now:'',
            tmax:'',
            tmin:'',
            sun:'',
            weather : ''
        }

        this.prevToday() 
       /*  this.getSun() */
        
      this.meteoCall() 
        
 }

 

   nextpage(){
       this.props.navigation.navigate('Actual')
   }

   changeImage(){
    setInterval(() => {
        if (image.uri = "https://image.freepik.com/free-vector/illustration-house-top-mountain-with-beautiful-sunset-mountains-landscape-background-sun-clouds-sky-e_212168-160.jpg" ) {
            image.uri = "https://cdn.dribbble.com/users/1622257/screenshots/3453501/night-house-landscape-01.jpg"
        }
        else if (image.uri = "https://cdn.dribbble.com/users/1622257/screenshots/3453501/night-house-landscape-01.jpg") {
            image.uri = "https://image.freepik.com/free-vector/illustration-house-top-mountain-with-beautiful-sunset-mountains-landscape-background-sun-clouds-sky-e_212168-160.jpg"
        }
      }, 3000);
   }

   prevToday(){
       axios.get(`https://api.meteo-concept.com/api/forecast/daily/0?token=${this.state.token}&insee=${this.state.insee}`)
       .then((response) =>{
        console.log('prévisions de today : ',response);
        this.setState({result : response.data.forecast})
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

        let tmax = response.data.forecast.tmax;
        let tmin = response.data.forecast.tmin;
        let moy = (tmax + tmin)/2
        this.setState({now: moy})
        this.setState({sun: climat})
        this.setState({tmax: tmax})
        this.setState({tmin: tmin})
        console.log('temperature actuelle : ', this.state.now); 
       
    })
    .catch(error => {
      console.log(error);
    })
   }

   getSun(){
    axios.get(`https://api.meteo-concept.com/api/forecast/nextHours?token=${this.state.token}&insee=${this.state.insee}`)
    .then((response) =>{
        console.log('temp today  : ', response);
        this.setState({result : response.data.forecast})
    })
    .catch(error => {
      console.log(error);
    })
    
    return this.state.result
   }

    meteoCall(){
    axios.get(`https://api.meteo-concept.com/api/location/cities?token=${this.state.token}&search=limoges`)
    .then((response) =>{
        console.log('test api : ');
        console.log(response);
        this.setState({result : response.data})
    })
    .catch(error => {
      console.log(error);
    })
} 

    render() {
        
        
      return (
     
        <Container>
            
        <View style={styles.container} >
            <ImageBackground source={image} style={styles.image}>
            <View style={{flex : 2}}>
            
            <Button style={{alignSelf : 'flex-end',marginTop:40, paddingHorizontal:10, backgroundColor:'#702163',opacity:0.5}} iconLeft rounded light onPress={() =>    this.nextpage() }>
            <Text style={{ color: 'white'}}>Plus</Text>
            <Icon style={{ color: 'white'}} name='arrow-forward' />
          </Button>
             
              <Text style={{ marginLeft : 15, fontSize: 90, color:'white' }}> {this.state.now}°</Text>
              <Text style={{marginTop: 0,  marginLeft : 30, color:'white', fontSize: 18 }}>tmax : {this.state.tmax}° tmin : {this.state.tmin}° </Text>
              <Text style={{marginLeft : 30, fontSize: 40, color:'white' }}> {this.state.sun} </Text>
              <Text style={{marginTop: 0,  marginLeft : 30, color:'white', fontSize: 18 }}>🏙 Limoges</Text>
              

         </View>
                
                   
                <Today/>
                
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

    }
  
    
  });
  
  