import React from 'react';
import {Layout, Text, Divider } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View } from 'react-native';
import RatingCircle from './RatingCircle';
import Heading from './Heading';

export default function Performance(props){
  return(
    <Layout>
        <Layout style={{flexDirection: 'row', backgroundColor: "black", padding: 10, alignItems: 'center'}}>
          
        <Text style={{fontSize: 30, color:"#79d279", fontWeight: "bold"}}>l </Text>

          {/* <Icon name="ellipsis-vertical-sharp" size={25} color="#66ff66" /> */}
        <Text style={styles.heading}>Player Rating</Text>
        </Layout>
        <Layout style={styles.container}>
            <RatingCircle rating={props.sofaRating} caption="Sofascore"/>
            <RatingCircle rating={8.8} caption="Whoscored"/>
            <RatingCircle rating={8.8} caption="Whoscored"/>
            <RatingCircle rating={8.8} caption="Whoscored"/>
        </Layout>

        <Layout style={{flexDirection: 'row', backgroundColor: "black", padding: 10, alignItems: 'center'}}>
          
        <Text style={{fontSize: 30, color:"#79d279", fontWeight: "bold"}}>l </Text>

          {/* <Icon name="ellipsis-vertical-sharp" size={25} color="#66ff66" /> */}
          <Text style={styles.heading}>Last 5 Games Rating</Text>
        </Layout>

        <Layout style={styles.container}>
            <RatingCircle rating={8.8} caption="Sofascore"/>
            <RatingCircle rating={8.8} caption="Sofascore"/>
            <RatingCircle rating={8.8} caption="Sofascore"/>
            <RatingCircle rating={8.8} caption="Sofascore"/>
        </Layout>
    </Layout>
    
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      height: 100, 
      padding: 10, 
      flexDirection: 'row',
      justifyContent: 'center'

    },
    heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
