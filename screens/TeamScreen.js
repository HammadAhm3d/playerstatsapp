import React from 'react';
import {Layout, Text, Input  } from '@ui-kitten/components';
import { StyleSheet, SafeAreaView  } from 'react-native';
import * as eva from '@eva-design/eva';

const TeamScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.container}>
        <Text>Team Screen</Text>
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

export default TeamScreen;