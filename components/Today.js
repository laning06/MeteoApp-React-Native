import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, List, ListItem } from 'native-base';
import axios from "axios";


 /* = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  
  
]; */

var data = []
var heure1 
var heure2  
var heure3
var res = []
var tsoil01 = null
var tsoil02 = null
var tsoil21 = null
var tsoil22 = null
var tsoil31 = null
var tsoil32 = null
var tsoil41 = null
var tsoil42 = null
var weather1 = ''
var weather2 = ''
var weather3 = ''
var weather4 = ''

function getData(){

  useEffect(() => {

  axios.get('https://api.meteo-concept.com/api/forecast/nextHours?token=6887ad9e8d1c10cc6351acc8a9051b06f6d6642fd2a94ad1ddd3f9f7c2879b9e&insee=87085')
    .then((response) =>{
        res = response.data.forecast
        tsoil01 = response.data.forecast[0].tsoil1
        tsoil02 = response.data.forecast[0].tsoil2
        tsoil21 = response.data.forecast[1].tsoil1
        tsoil22 = response.data.forecast[1].tsoil2
        tsoil31 = response.data.forecast[2].tsoil1
        tsoil32 = response.data.forecast[2].tsoil2
        tsoil41 = response.data.forecast[3].tsoil1
        tsoil42 = response.data.forecast[3].tsoil2

        switch (response.data.forecast[0].weather){
          case 0 : weather1 = "Soleil"
          break;
          case 1 : weather1 = "Peu nuageux"
          break;
          case 2 : weather1 = "Ciel voilé"
          break;
          case 3 : weather1 = "Nuageux"
          break;
          case 4 : weather1 = "Très nuageux"
          break;
          case 5 : weather1 = "couvert"
          break;
          case 6 : weather1= "brouillard"
          break;
          case 7 : weather1 = "Brouillard givrant"
          break;
          case 10 : weather1 = "Pluie faible"
          break;
          case 11 : weather1 = "Pluie modérée"
          break;
          case 12 : weather1 = "Pluie faible verglaçante"
          break;
          case 40 : weather1 = "Averses de pluie locales et faibles"
          break;
      }
      switch (response.data.forecast[1].weather){
        case 0 : weather2 = "Soleil"
        break;
        case 1 : weather2 = "Peu nuageux"
        break;
        case 2 : weather2 = "Ciel voilé"
        break;
        case 3 : weather2 = "Nuageux"
        break;
        case 4 : weather2 = "Très nuageux"
        break;
        case 5 : weather2 = "couvert"
        break;
        case 6 : weather2= "brouillard"
        break;
        case 7 : weather2 = "Brouillard givrant"
        break;
        case 10 : weather2 = "Pluie faible"
        break;
        case 11 : weather2 = "Pluie modérée"
        break;
        case 12 : weather2 = "Pluie faible verglaçante"
        break;
        case 40 : weather2= "Averses de pluie locales et faibles"
        break;
    }
    switch (response.data.forecast[2].weather){
      case 0 : weather3 = "Soleil"
      break;
      case 1 : weather3 = "Peu nuageux"
      break;
      case 2 : weather3 = "Ciel voilé"
      break;
      case 3 : weather3 = "Nuageux"
      break;
      case 4 : weather3 = "Très nuageux"
      break;
      case 5 : weather3 = "couvert"
      break;
      case 6 : weather3= "brouillard"
      break;
      case 7 : weather3 = "Brouillard givrant"
      break;
      case 10 : weather3 = "Pluie faible"
      break;
      case 11 : weather3 = "Pluie modérée"
      break;
      case 12 : weather3 = "Pluie faible verglaçante"
      break;
      case 40 : weather3 = "Averses de pluie locales et faibles"
      break;
  }
  switch (response.data.forecast[3].weather){
    case 0 : weather4 = "Soleil"
    break;
    case 1 : weather4 = "Peu nuageux"
    break;
    case 2 : weather4= "Ciel voilé"
    break;
    case 3 : weather4 = "Nuageux"
    break;
    case 4 : weather4 = "Très nuageux"
    break;
    case 5 : weather4 = "couvert"
    break;
    case 6 : weather4= "brouillard"
    break;
    case 7 : weather4 = "Brouillard givrant"
    break;
    case 10 : weather4 = "Pluie faible"
    break;
    case 11 : weather4 = "Pluie modérée"
    break;
    case 12 : weather4 = "Pluie faible verglaçante"
    break;
    case 40 : weather4 = "Averses de pluie locales et faibles"
    break;
}

        console.log('temp today  : ', res);
        
        
        console.log('heure juste : ', response.data.forecast[0].datetime.slice(11,13));
         heure1 =  parseFloat(response.data.forecast[0].datetime.slice(11,13)) 
         heure2 = parseFloat(response.data.forecast[1].datetime.slice(11,13)) ;
         heure3 = parseFloat(response.data.forecast[2].datetime.slice(11,13)) ;
         heure4 = parseFloat(response.data.forecast[3].datetime.slice(11,13)) ;

         for (let i = 0; i < 2; i++) {
          let h = heure1
          console.log('parse :', h);
          let heure = {time : h,tsoil1:tsoil01, tsoil2:tsoil02,uri:'https://i.gifer.com/68J.gif',weather : weather1}
          data.push(heure)
          heure1 = heure1 + 1
          heure = null
        }
          for (let i = 0; i <= 2; i++) { 
          let h = heure2
          let heure = {time : h,tsoil1:tsoil21, tsoil2:tsoil22,uri:'https://i.gifer.com/68J.gif',weather : weather2}
          data.push(heure)
          console.log(h);
          heure2 = heure2 + 1
          heure = null
        }
        for (let i = 0; i <= 2; i++) { 
          let h = heure3
          let heure = {time : h,tsoil1:tsoil31, tsoil2:tsoil32,uri:'https://i.gifer.com/68J.gif',weather : weather3}
          data.push(heure)
          console.log(h);
          heure3 = heure3 + 1
          heure = null
        } 
        for (let i = 0; i <= 2; i++) { 
          let h = heure4
          let heure = {time : h,tsoil1:tsoil41, tsoil2:tsoil42,uri:'https://i.gifer.com/68J.gif',weather : weather4}
          data.push(heure)
          console.log(h);
          heure4 = heure4 + 1
          heure = null
        } 


    })
    .catch(error => {
      console.log(error);
    })


    
  }, []);

 
 

  return data;
  
    
}


const Item = ({ item, onPress, style }) => (

  
  <List>
  <ListItem>
              <Left>        
                <Text style={styles.listText}>  {item.time}:00 </Text>
              </Left>
              <Body style={styles.listText}>
              <Icon style={{color:"white"}} name = "rainy" />
                <Text style={{color: 'white', marginLeft:10, fontWeight : 'bold'}}>{item.weather} {item.tsoil1}-{item.tsoil2}°C</Text>
              </Body>
  </ListItem>

</List>
  
);



const App = () => {

  const [selectedId, setSelectedId] = useState(null);
  const data = getData()


    

  const renderItem = ({ item }) => {
    
    

    return (
      <Item
        item={item}
      />
    );
  };

 

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.time}
      />
    </SafeAreaView> 
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,

  },
  title: {
    fontSize: 32,
    color:'white',
    fontSize:18
  },
  listText:{
    color: "white",
    flexDirection: 'row',
    fontWeight : 'bold'

}

});

export default App;