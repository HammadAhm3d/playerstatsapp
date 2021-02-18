import React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import * as material from '@eva-design/material';
import AppStack from './navigation/AppStack';

export default () => {
  return(
      <>
        <IconRegistry icons={EvaIconsPack}/>
        <ApplicationProvider {...material} theme={material.dark}> 
          <AppStack />
        </ApplicationProvider>
      </>
    );
}
