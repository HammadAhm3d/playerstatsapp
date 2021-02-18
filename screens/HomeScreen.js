import React from 'react';
import {Layout, Text, Input  } from '@ui-kitten/components';
import { StyleSheet, SafeAreaView  } from 'react-native';
import axios from 'axios';

const HomeScreen = ({navigation}) => {
  const [playerName, setPlayerName] = React.useState('');
  const [teamName, setTeamName] = React.useState('');

  const getPlayers = (player) => {
    var arr = [];
    axios.get('https://intense-bayou-73322.herokuapp.com/api/footballPlayer?name='+player)
    .then(res => {
      arr = res.data.data;
      console.log(arr);
    })
    .catch(e => {
      console.log(e.message);
    })
  }

  return(
        <SafeAreaView style={{ flex: 1 }}>
          <Layout style={styles.container}>

            <Text>Welcome to the</Text>
            <Text>Ultimate Player Stats App</Text>
            
            <Layout style={{paddingTop: 20}}>
                <Input
                placeholder='Search Player'
                value={playerName}
                onChangeText={nextValue => setPlayerName(nextValue)}
                onEndEditing={e => navigation.navigate('PlayerList', {playername: e.nativeEvent.text})}
                // onEndEditing={e => getPlayers(e.nativeEvent.text)}
                // onEndEditing={() => navigation.navigate('PlayerScreen')}
                />
            </Layout>
            
            <Layout style={{paddingTop: 20}}>
                <Input
                placeholder='Search Team'
                value={teamName}
                onChangeText={nextValue => setTeamName(nextValue)}
                />
            </Layout>
          </Layout>
      </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;