import React, {useState} from 'react';
import {Layout, Text, Input, TopNavigation, TopNavigationAction, Card, Avatar, Divider, List, ListItem, Spinner } from '@ui-kitten/components';
import { StyleSheet, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Heading from '../components/Heading';
import Performance from '../components/Performance';
import Figure from '../components/Figure';
import Strengths from '../components/Strengths';
import PlayerInfo from '../components/PlayerInfo';
import BottomButton from '../components/BottomButton';
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
  const[statsClicked, setStatsClicked] = useState(false);
  const[playerStats, setPlayerStats] = useState({});
  const[statsLoading, setStatsLoading] = useState(false);




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

  const getStats = () => {
    const{link} = route.params.url;
    if(statsClicked) {
      setStatsClicked(false);
  }
  else {
  setStatsClicked(true);
  // const link = 'https://www.sofascore.com/player/lionel-messi/12994';
    setStatsLoading(true);
  axios.get('https://intense-bayou-73322.herokuapp.com/api/footballPlayer/getAttackingStatistics?url='+link)
  .then(async(res) => {
    console.log(res.data);
    await setPlayerStats({
      ...playerStats,
      attacking: res.data.data.image,
    });
  // setIsLoading(false)

  })
  .then(() => {
      axios.get('https://intense-bayou-73322.herokuapp.com/api/footballPlayer/getPassingStatistics?url='+link)
      .then(async(res) => {
          console.log(res.data);
          await setPlayerStats({
            ...playerStats,
            passing: res.data.data.image,
          });
      //   setIsLoading(false)

        })
        .catch(e => {
          console.log(e.message);
        })
        .then(() => {
          axios.get('https://intense-bayou-73322.herokuapp.com/api/footballPlayer/getDefendingStatistics?url='+link)
          .then(async(res) => {
              console.log(res.data);
              await setPlayerStats({
                ...playerStats,
                defending: res.data.data.image,
              });
          //   setIsLoading(false)
    
            })
            .catch(e => {
              console.log(e.message);
            })

            .then(() => {
              axios.get('https://intense-bayou-73322.herokuapp.com/api/footballPlayer/getMatchesStatistics?url='+link)
              .then(async(res) => {
                  console.log(res.data);
                  await setPlayerStats({
                    ...playerStats,
                    match: res.data.data.image,
                  });
              //   setIsLoading(false)
        
                })
                .catch(e => {
                  console.log(e.message);
                })
                .then(() => {
                  axios.get('https://intense-bayou-73322.herokuapp.com/api/footballPlayer/getOtherStatistics?url='+link)
                  .then(async(res) => {
                      console.log(res.data);
                      await setPlayerStats({
                        ...playerStats,
                        other: res.data.data.image,
                      });
                  //   setIsLoading(false)
            
                    })
                    .catch(e => {
                      console.log(e.message);
                    })
                    .then(() => {
                      axios.get('https://intense-bayou-73322.herokuapp.com/api/footballPlayer/getCardsStatistics?url='+link)
                      .then(async(res) => {
                          console.log(res.data);
                          await setPlayerStats({
                            ...playerStats,
                            cards: res.data.data.image,
                          });
                          setStatsLoading(false);
                
                        })
                        .catch(e => {
                          console.log(e.message);
                          setStatsLoading(false);
                        })
                      })
                  })
              })
          })
  })
  .catch(e => {
    console.log(e.message);
  })
}
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

        <Layout style={{flexDirection: 'row', alignItems: 'center',}}>
            <TouchableOpacity
            style={styles.tabButton}
            onPress={() => getStats()}>
                <BottomButton 
                title="STATS"
                />
            </TouchableOpacity>
          
            <TouchableOpacity
            style={styles.tabButton}
            onPress={() => setStatsClicked(!statsClicked)}>
                <BottomButton
                    title="TRANSFERS"
                />
            </TouchableOpacity>
            
            <TouchableOpacity
            style={styles.tabButton}
            onPress={() => setStatsClicked(!statsClicked)}>
                <BottomButton
                    title="INJURIES"
                />
            </TouchableOpacity>
        </Layout>
        
        {statsClicked?
        <Layout>
        {statsLoading? <Spinner /> : 
        <Layout>
        <Text category="h4">attack</Text>
        <Image 
            source={{uri:  `data:image/gif;base64,${playerStats.attacking}`}}
            style={{width: 400, height: 400, resizeMode: "contain"}}
        />

        <Text category="h4">Defence</Text>
        <Image 
            source={{uri:  `data:image/gif;base64,${playerStats.defending}`}}
            style={{width: 400, height: 400, resizeMode: "contain"}}
        />
        <Text category="h4">Passing</Text>
        <Image 
            source={{uri:  `data:image/gif;base64,${playerStats.passing}`}}
            style={{width: 400, height: 400, resizeMode: "contain"}}
        />

        <Text category="h4">Matches</Text>
        <Image 
            source={{uri:  `data:image/gif;base64,${playerStats.match}`}}
            style={{width: 400, height: 400, resizeMode: "contain"}}
        />

        <Text category="h4">Cards</Text>
        <Image 
            source={{uri:  `data:image/gif;base64,${playerStats.cards}`}}
            style={{width: 400, height: 400, resizeMode: "contain"}}
        />

        <Text category="h4">Other</Text>
        <Image 
            source={{uri:  `data:image/gif;base64,${playerStats.other}`}}
            style={{width: 400, height: 400, resizeMode: "contain"}}
        />
        </Layout>}
        
        </Layout>
        : null
        }
         
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
    padding: 5,
  },
  tabButton: {
    flex: 1,
    flexDirection: 'row', 
    width: 110,
    height: 80,
    margin: 8, 
    borderRadius: 10,
    backgroundColor: '#79d279',
  },
});

export default PlayerScreen ;