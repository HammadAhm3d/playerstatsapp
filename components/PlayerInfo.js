import React from 'react';
import {Avatar, Layout, Text  } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import InfoCard from './InfoCard';

export default function PlayerInfo(props){
  return(
    <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
        <Layout style={{paddingRight: 10}}>
            <Avatar 
                source={require('../assets/posmap.png')}
                size='giant'
            />
        </Layout>
        <Layout>
        <Layout style={{flexDirection: 'row'}}>
            <Text style={{marginRight: 20, marginLeft: 25}} category="h6">{props.playerName}</Text>
            <Text>{props.clubName}</Text>
        </Layout>
        <Layout>
        <Layout style={{flexDirection: 'row'}}>
                <InfoCard 
                    property="Height"
                    value={props.playerHeight}
                />
                
                <InfoCard 
                    property="Preferred Foot"
                    value={props.foot}
                />
                <InfoCard 
                    property="DOB"
                    value={props.birthDate}
                />
                </Layout>
            </Layout>

            <Layout style={{flexDirection: 'row'}}>
                <InfoCard 
                    property="Country"
                    value={props.country}
                />
                <InfoCard 
                    property="Shirt"
                    value={props.shirt}
                />
                <InfoCard 
                    property="Ranking"
                    value={props.rank}
                />
                </Layout>
        </Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
