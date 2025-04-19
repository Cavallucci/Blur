import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import Menu from './components/menu';
import Authentication from './components/authentication';
import Loader from './components/common/loader';


const App = () => {
  const [userConnected, setUserConnected] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
      setTimeout(() => {
        setUserConnected(true);
      }, 2000);
    }, 2000);
  });

  return (
    <View style={{ flex: 1 }}>
      {loader ? (
        <Loader />
      ) : (
        userConnected ? (
          <Menu />
        ) : (
          <Authentication />
        )
      )}
    </View>
  );
};


export default App;
