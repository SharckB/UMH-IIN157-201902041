import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import Tarea from "./src/componentes/Tarea";

export default function App(){
 
  return(
    <SafeAreaView>
      <ScrollView>
        <Tarea
        titulo="Tarea 1"
        descripcion = "Descaripcion Tarea 1"
        />

      <Tarea
        titulo="Tarea 2"
        descripcion = "Descaripcion Tarea 2"
        />

        <Tarea
        />
<Tarea
        />
        <Tarea
        />
        <Tarea
        />
        
      </ScrollView>
    </SafeAreaView>
  );
}

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
  titulo:{
    fontSize: 100,
    fontWeight: '600',

  }
});
