import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import dice1 from './assets/png/dice-1.png';
import dice2 from './assets/png/dice-2.png';
import dice3 from './assets/png/dice-3.png';
import dice4 from './assets/png/dice-4.png';
import dice5 from './assets/png/dice-5.png';
import dice6 from './assets/png/dice-6.png';

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = () => {
  const [diceIndex, setDiceIndex] = useState(0);

  const rollDice = () => {
    const randomIndex = Math.floor(Math.random() * 6);
    setDiceIndex(randomIndex);
  };

  return (
    <View style={styles.container}>
      <Image source={diceImages[diceIndex]} style={styles.diceImage} />
      <TouchableOpacity style={styles.button} onPress={rollDice}>
        <Text style={styles.buttonText}>Lancer le dé</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  diceImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemsContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 10,
  },
  TextItems: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Dice;
