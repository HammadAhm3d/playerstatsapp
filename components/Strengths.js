import React from 'react';
import {Layout, Text  } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Octicons';
import { StyleSheet } from 'react-native';
// 66ff66

export default function Strengths(props){
  return(
    <Layout>
        <Layout style={{flexDirection: 'row', paddingLeft: 20, padding: 10}}>
            <Icon name="primitive-dot" size={16} color={props.clr} />
            <Text style={{...styles.heading, color: props.clr}}> {props.title}</Text>
        </Layout>
        <Layout style={{flexDirection: 'row', paddingHorizontal: 10, paddingBottom: 10}}>
            
            <Text>{props.str}</Text>
        </Layout>
      </Layout>

  );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 14,
        fontWeight: 'bold',
        // color: "#66ff66",
      },
});
