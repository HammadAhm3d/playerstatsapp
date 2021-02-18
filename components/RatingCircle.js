import React from 'react';
import {Layout, Text  } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';


export default function RatingCircle(props){
  return(
    <Layout style={{backgroundColor: 'black', padding: 15, alignItems: 'center'}}>
      <Layout style={styles.circle}>
          <Text style={{fontSize: 22, fontWeight: "bold"}}>{props.rating}</Text>
      </Layout>
      <Text style={{fontSize: 10}}>{props.caption}</Text>
    </Layout>

  );
}

const styles = StyleSheet.create({
  circle: {
    borderRadius: 50, 
    backgroundColor: "#79d279", 
    height: 50, 
    width: 50, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
});
