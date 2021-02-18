import React from 'react';
import {Layout, Text  } from '@ui-kitten/components';
import { StyleSheet, Image } from 'react-native';

export default function Figure(props){

  
  return(
    <Layout style={{alignItems: 'center', padding: 15}}>
      <Image 
      source={props.path}
      style={styles.img}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  img: {
    // height: 500
  },
});
