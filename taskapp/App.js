import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
  Image,
} from 'react-native';


import Tarea from "./src/componentes/Tarea";

export default function App(){

  const [listaTareas, setTareas] = useState([{id:1,titulo : "Tarea 1", descripcion :"Lorem ipsum text 1"},
     ]);

    const [nuevaTarea, addTarea] = useState(false);

    useEffect ( () =>  {
      if (nuevaTarea === true) {
        listaTareas.push({id:4,titulo : "Tarea x+1", descripcion :"Esta es una tarea agregada"});
      }
      addTarea(false);
    }, [nuevaTarea])

    const agregarTarea = () =>{
      addTarea(true);
    }

 
  return(
  <>

    <SafeAreaView>
    <View style={styles.Container}>
    <Image 
       style={styles.imgStyle} 
       source={require("./imagen123.png") }
       />
       </View>
      
      <Button  style={styles.btn} title="Nueva Cancion" color= "#E27C56" onPress={agregarTarea}></Button>
      <ScrollView>
        
{
listaTareas.map( (item,index) => (
  <Tarea data={item}/>

) ) 


}   


      </ScrollView>
    </SafeAreaView>
    
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  Container:{
justifyContent:'center',
alignItems:'center',
  },
  imgStyle:{
      justifyContent:'center',
      width: 200,
      height: 200,
      marginTop: 30

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
  titulo:{
    fontSize: 100,
    fontWeight: '600',

  },
  btn:{
    marginTop:8,
    marginLeft:8,
    marginRight:8
  }
});