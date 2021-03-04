import React, {useState} from 'react';
import {Layout, Text, Input, TopNavigation, TopNavigationAction, Card, Avatar, Divider, List, ListItem, Spinner } from '@ui-kitten/components';
import { StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView  } from 'react-native';
import axios from 'axios';
import BottomButton from '../components/BottomButton';


const Dummy = ({navigation}) => {
  
    const[statsClicked, setStatsClicked] = useState(false);
    const[playerStats, setPlayerStats] = useState({});
    const[isLoading, setIsLoading] = useState(false);


    const getStats = () => {
        if(statsClicked) {
            setStatsClicked(false);
        }
        else {
        setStatsClicked(true);
        // const link = 'https://www.sofascore.com/player/lionel-messi/12994';
        setIsLoading(true);
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
                            //   setIsLoading(false)
                      
                              })
                              .catch(e => {
                                console.log(e.message);
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
  return(
        <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <Layout style={styles.container}>
            
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
        <Divider style={{backgroundColor: '#4A4A4A'}}/>

        {statsClicked?
        <Layout>
        {isLoading? <Spinner /> : 
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
          </Layout>
          </ScrollView>

      </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

export default Dummy;