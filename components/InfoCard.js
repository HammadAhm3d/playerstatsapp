import React from 'react';
import {Avatar, Layout, Text  } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';


export default function InfoCard(props){
  return(
    <Layout style={{ width: '30%', alignItems: 'center', paddingVertical: 5}}>
        <Text style={{fontSize: 10, color: '#b3b3cc'}}>{props.property}</Text>
        <Text style={{fontSize: 20 }}>{props.value}</Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
