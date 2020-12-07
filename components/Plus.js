
import * as React from "react";
import { ImageBackground, Image, StyleSheet, View, SafeAreaView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Icon } from "native-base";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Carousel from 'react-native-snap-carousel';
import axios from "axios";


const img = { uri: "https://image.flaticon.com/icons/png/512/191/191055.png" };

const el = []

export default class Plus extends React.Component {

    constructor(props){
        super(props);
        this.state = {  

          token:'6887ad9e8d1c10cc6351acc8a9051b06f6d6642fd2a94ad1ddd3f9f7c2879b9e',
          insee : '87085',
          result:null,
          vent: '', 
          humidity: '',
          pre: '',

          activeIndex:0,
      }
      this.getData()
      
        }


        getData(){  
         
          axios.get(`https://api.meteo-concept.com/api/forecast/nextHours?token=${this.state.token}&insee=87085`)
          .then((response)=>{
              console.log('requette  page actual :', response.data.forecast[0].wind10m);

              let vent = { title:"Vent", text: response.data.forecast[0].wind10m, color:'#1E1C4E',unit: 'km/h', uri :'https://image.flaticon.com/icons/png/512/191/191055.png' }
              let humidity = { title:"Humidité", text: response.data.forecast[0].rh2m, color:'#6F6EBC',unit: '%', uri :'https://genuineway.io/wp-content/uploads/2019/11/water-3.png' }
              el.push(vent)
              el.push(humidity)

          })

          axios.get(`https://api.meteo-concept.com/api/forecast/daily/0?token=${this.state.token}&insee=87085`)
          .then((res)=>{
            let pre = { title:"Précipitations", text: res.data.forecast.rr10, color:'#CF7138',unit: 'mm', uri :'https://www.pngkit.com/png/full/402-4020682_rain-rain-icon-png-white.png' }
            el.push(pre)
            console.log('Le tableau : ',el);
      
        })

          
    }


    _renderItem({item,index}){
        return (
          <View style={{
              borderRadius: 5,
              height: 250,
              padding: 0,
              
              opacity: 0.5  },{ backgroundColor:item.color}}>
                   <Image
            style={{   
              color:'white',                //on ne va plus faire pour maintenant et puis les autres heures, on va faire pour chaque heured de la journée une fois 
              resizeMode: "cover",
              height: 60,
              width: 60,
              marginLeft: 25,
              marginTop: 25, 
            
            }}
            source={item}
          />

             <Text style={{fontSize: 20, marginTop: 25, marginLeft: 10,color:'white'}}>{item.text} {item.unit} </Text>
            
            
          <Card transparent style={[stylesD.mycard]}>
            <CardItem style={{ marginBottom: 10,opacity:0.5},{ backgroundColor:item.color}}>
              <Body style={{ flexDirection: 'column'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15, marginBottom: 18,paddingHorizontal:0, alignItems: 'center',color:'white',}}>
                {item.title}
                
                </Text>
              </Body>
            </CardItem>
          </Card>

          </View>

        )
    }
    
  render() {
    return (
     
        <SafeAreaView style={{flex: 1, paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center',marginBottom:20}}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={el}
                  sliderWidth={200}
                  itemHeight={200}
                  itemWidth={100}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
    );

    
  }
}

const stylesD = StyleSheet.create({

  mycard:{
    marginTop: 9,
   paddingVertical:5
  }
 
  });