import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Matchs from '../matchs';
import Messages from '../messages';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemsContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  TextItems: {
    color: 'white',
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

const Menu = () => {
  const [selectedPage, setSelectedPage] = useState<string | null>('matchs');

  return (
    <View style={styles.container}>
      {selectedPage === 'matchs' && <Matchs />}
      {selectedPage === 'messages' && <Messages />}

      <View style={styles.itemsContainer}>
        <TouchableOpacity onPress={() => setSelectedPage('matchs')}>
          <Text style={styles.TextItems}>matchs</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedPage('messages')}>
          <Text style={styles.TextItems}>messages</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedPage('profile')}>
          <Text style={styles.TextItems}>profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;
