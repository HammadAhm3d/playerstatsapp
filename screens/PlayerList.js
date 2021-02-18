import React, {useState} from 'react';
import {Layout, Text, Divider, List, ListItem, Spinner, TopNavigation, TopNavigationAction,  } from '@ui-kitten/components';
import { StyleSheet, SafeAreaView  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Heading from '../components/Heading';
import axios from 'axios';

const data = new Array(8).fill({
    title: 'Item',
    description: 'Description for Item',
  });

const PlayerList = ({navigation, route}) => {
  
    const BackIcon = (props) => (
        <Icon {...props} name='arrow-back' size={20} color="white"/>
      );
    
      const BackAction = () => (
        <TopNavigationAction 
        icon={BackIcon}
        onPress={() => navigation.goBack()}
        />
      );

    const[isLoading, setIsLoading] = useState(false);
    const[players, setPlayers] = useState([]);
  
    const getData = () => {
        var arr = [];
        const player = route.params.playername;
        setIsLoading(true);
        axios.get('https://intense-bayou-73322.herokuapp.com/api/footballPlayer?name='+player)
        .then(async(res) => {
        arr = res.data.data;
        // setPlayers(arr);
        var newArr = [];
        arr.map((item) => {
            var text = item.name;
            var  splitted = text.split('\n');
            newArr.push({
                name: splitted[1],
                team: splitted[0],
                url: item.url
            });
            
        });
        setPlayers(newArr);
        // setIsLoading(false);
        })
        .catch(e => {
        console.log(e.message);
        setIsLoading(false);
        })
        .then(() => {
          axios.get('https://intense-bayou-73322.herokuapp.com/api/footballPlayer/transfermarkt/search?name='+player)
          .then(res => {
            console.log(res.data.data);
            setIsLoading(false);
          })
          .catch(e => {
            console.log(e.message);
            setIsLoading(false);
            })
        })
    }
  React.useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item, index }) => (
    
           <ListItem
            title={`${item.name}`}
            description={`${item.team}`}
            onPress={() => navigation.navigate('PlayerScreen', {name: item.name, team: item.team, url: item.url})}
            />  
    
  );
    
  return(
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation
                style={{backgroundColor: "#292929"}}
                accessoryLeft={BackAction}
                title={() => <Text>Players</Text>}
                />
            <Layout style={styles.container}>
            
            {isLoading? 
            <Layout style={{alignItems: 'center',
            justifyContent: 'center',}}>
            <Spinner size='giant'/>
            </Layout> : 
            <Layout>
            <List
            style={{ maxHeight: 400, width: 300}}
            data={players}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
            />
            </Layout>
            }
            
          </Layout>
          
          
      </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingLeft: 100
  },
});

export default PlayerList;