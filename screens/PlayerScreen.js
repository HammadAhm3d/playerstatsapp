import React, {useState} from 'react';
import {Layout, Text, Input, TopNavigation, TopNavigationAction, Card, Avatar, Divider, List, ListItem, Spinner } from '@ui-kitten/components';
import { StyleSheet, View, SafeAreaView, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Heading from '../components/Heading';
import Performance from '../components/Performance';
import Figure from '../components/Figure';
import Strengths from '../components/Strengths';
import PlayerInfo from '../components/PlayerInfo';
import axios from 'axios';



const PlayerScreen = ({navigation, route}) => {

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
  const[playerData, setPlayerData] = useState({});
  const[ratings, setRatings] = useState({});
  const[heatMap, setHeatMap] = useState('');
  const[posMap, setPosMap] = useState('');
  const[pentMap, setPentMap] = useState('');
  const[strengths, setStrengths] = useState('');
  const[weaknesses, setWeaknesses] = useState('');



  const getData = async() => {
    const link = route.params.url;
    setIsLoading(true);
    axios.get('https://intense-bayou-73322.herokuapp.com/api/footballPlayer/getPersonalInfo?url='+link)
    .then(async(res) => {
      console.log(res.data.data);
      await setPlayerData(res.data.data.personalDetails);
      // await console.log(playerData);
    })
    .then(() => {
      axios.get('https://intense-bayou-73322.herokuapp.com/api/footballPlayer/getAverageRating?url='+link)
      .then(async(res) => {
        var text = res.data.data.averageRating;
        var  splitted = text.split('\n');
        const sofa = splitted[1]
        // console.log(res.data.data);
        await setRatings({
          ...ratings,
          sofaRating: sofa
        })
      })
      .catch(e => {
        console.log(e.message);
        setIsLoading(false);
        })
        .then(() => {
          axios.get('https://intense-bayou-73322.herokuapp.com/api/footballPlayer/getStrengthAndWeakness?url='+link)
          .then(async(res) => {
            var sw = res.data.data;
            console.log(sw);
            await setStrengths(sw.strengths);
            await setWeaknesses(sw.weaknesses);

          })
          .catch(e => {
            console.log(e.message);
            setIsLoading(false);
            })
        .then(() => {
          axios.get('https://intense-bayou-73322.herokuapp.com/api/footballPlayer/getSessionHeatMap?url='+link)
          .then(async(res) => {
            await setHeatMap(res.data.data.img)

          })
          .catch(e => {
            console.log(e.message);
            setIsLoading(false);
            })
          .then(() => {
            axios.get('https://intense-bayou-73322.herokuapp.com/api/footballPlayer/getPositionMap?url='+link)
            .then(async(res) => {
              // console.log(res.data.data.img);
              await setPosMap(res.data.data.img);
            })
            .catch(e => {
              console.log(e.message);
              setIsLoading(false);
              })
            .then(() => {
              axios.get('https://intense-bayou-73322.herokuapp.com/api/footballPlayer/getPentagonMap?url='+link)
              .then(async(res) => {
                console.log(res.data.data.img);
                await setPentMap(res.data.data.img);
                setIsLoading(false);
              })
              .catch(e => {
                console.log(e.message);
                setIsLoading(false);
                })
            })
          })  
        })
      })
    })
    .catch(e => {
      console.log(e.message);
      setIsLoading(false);
      })
  }
  React.useEffect(() => {
    getData();
  }, []);

  return(
    <SafeAreaView style={{ flex: 1 }}>
    <TopNavigation
      style={{backgroundColor: "#292929"}}
      accessoryLeft={BackAction}
      title={() => <Layout style={{alignItems: 'center', justifyContent: 'center'}}><Text>Player Stats</Text></Layout>}
    />
  
    <Layout style={styles.container}>
    {isLoading? 
            <Layout style={{alignItems: 'center',
            justifyContent: 'center',}}>
            <Spinner size='giant'/>
            </Layout> :
      <ScrollView>
        {/* <Text>{route.params.url}</Text> */}
        <PlayerInfo 
          playerName={route.params.name}
          clubName={route.params.team}
          playerHeight={playerData.height}
          birthDate={playerData.birthDate}
          foot={playerData.prefferedFootStyle}
          country={playerData.nationality}
          shirt={playerData.shirtNumber}
          rank={playerData.ranking}
        />
        <Performance
          sofaRating={ratings.sofaRating}
        />
        <Heading 
          title="Heatmap"
        />
        <Layout style={{alignItems: 'center', paddingBottom: 15}}>
          <Image 
          source={{uri:  `data:image/gif;base64,${heatMap}`}}
          // source={require('../assets/posmap.png')}
          style={{width: 400, height: 400, resizeMode: "contain"}}
          />
        </Layout>
        <Divider style={{backgroundColor: '#4A4A4A'}}/>
        <Strengths 
        title="Strengths" 
        clr="#79d279"
        str={strengths}
        />
        
        <Strengths 
        title="Weaknesses" 
        clr="#ff8533"
        str={weaknesses}
        />

        <Divider style={{backgroundColor: '#4A4A4A'}}/>
        <Heading 
          title="Position Map"
        />
        <Layout style={{alignItems: 'center', paddingBottom: 15}}>
          <Image 
          source={{uri:  `data:image/gif;base64,${posMap}`}}
          // source={require('../assets/posmap.png')}
          style={{width: 400, height: 400, resizeMode: "contain"}}
          />
        </Layout>
        <Divider style={{backgroundColor: '#4A4A4A'}}/>

        <Heading 
          title="PlayStyle"
        />
        <Layout style={{alignItems: 'center', paddingBottom: 15}}>
          <Image 
          source={{uri:  `data:image/gif;base64,${pentMap}`}}
          // source={require('../assets/posmap.png')}
          style={{width: 400, height: 400, resizeMode: "contain"}}
          />
        </Layout>
        <Divider style={{backgroundColor: '#4A4A4A'}}/>
        </ScrollView>
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
  },
});

export default PlayerScreen ;