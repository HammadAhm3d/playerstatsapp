import React from 'react';
import {Layout, Text  } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';


export default function Heading(props){
  return(
    <Layout style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
          <Text style={{fontSize: 30, color:"#79d279", fontWeight: "bold"}}>l </Text>
         {/* <Icon name="ellipsis-vertical-sharp" size={25} color="#66ff66" /> */}
        <Text style={styles.heading}>{props.title}</Text>
      </Layout>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
