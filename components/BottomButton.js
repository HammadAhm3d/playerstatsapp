import React from 'react';
import {Layout, Text  } from '@ui-kitten/components';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet } from 'react-native';


export default function BottomButton(props){
  return(
    <Layout style={styles.container}>
      {props.title === "STATS"?
      <MaterialCommunityIcon  style={styles.icon} name='chart-areaspline' size={25} color="white"/>
      : null}

      {props.title === "TRANSFERS"?
      <FontAwesome5  style={styles.icon} name='people-arrows' size={25} color="white"/>
      : null}

      {props.title === "INJURIES"?
      <Fontisto  style={styles.icon} name='bandage' size={25} color="white"/>
      : null}

        <Layout style={styles.textContainer}>
          <Text style={styles.textStyle}>{props.title}</Text>
        </Layout>
             
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
    width: 110,
    height: 80,
    // margin: 8, 
    borderRadius: 10,
    backgroundColor: '#79d279',
  },

  icon: {
    paddingLeft: 8,
    paddingTop: 10,
  },

  textContainer: {
    flex: 1,
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#79d279',
    marginRight: 5,
    marginLeft: 8,
    // justifyContent: "space-between",
  },
  textStyle: {
    fontSize: 16,
    paddingTop: 45,
    alignSelf: "flex-end"
  }
});
