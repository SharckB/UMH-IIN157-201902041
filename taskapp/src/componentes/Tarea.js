import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export default function Tarea(props){

const {data} = props;
const {id=0,titulo = "Titulo de Tarea", descripcion ="Sin descripcion"} = data;

    return(
 <View style={estilos.contenedor}> 
<Text style={estilos.titulo} >{titulo}</Text>
<Text style={estilos.descripcion}>{descripcion}</Text>
 </View>
    )

}

const estilos = StyleSheet.create({
contenedor:{
width: '95%',
height:150,
padding:15,
marginLeft:15,
marginRight:15,
margin:15,
marginBottom:15,
marginTop:15,

borderRadius:16,
backgroundColor:'#7ECDA4'
},
titulo:{
    fontSize: 18,
    fontWeight: '500',

},

descripcion:{
  fontSize: 18,
  fontWeight: '500',

}


});