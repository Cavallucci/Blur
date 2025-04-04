import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Dice from '../dice';
import Wheel from '../wheel';

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
  const [selectedGame, setSelectedGame] = useState('dice');

  return (
    <View style={styles.container}>
      {selectedGame === 'dice' && <Dice />}
      {selectedGame === 'wheel' && <Wheel />}

      <View style={styles.itemsContainer}>
        <TouchableOpacity onPress={() => setSelectedGame('dice')}>
          <Text style={styles.TextItems}>Dés</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedGame('wheel')}>
          <Text style={styles.TextItems}>Roue</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedGame('puissance4')}>
          <Text style={styles.TextItems}>Puissance 4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;
