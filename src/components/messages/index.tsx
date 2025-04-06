import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import ModalPopUp from './modal';

const Wheel = () => {
    const [segments, setSegments] = useState<Array<string>>(['1', '2', '3', '4', '5', '6']);
    const [colors, setColors] = useState<Array<string>>(['#FF5733', '#33C3FF', '#4CAF50', '#FFC107', '#9C27B0', '#E91E63']);
    const [selectedSegment, setSelectedSegment] = useState<string | null>(null);
    const [rotateValue] = useState(new Animated.Value(0));
    const [totalRotation, setTotalRotation] = useState(0); // Stocke l'accumulation des rotations
    const segmentAngle = 360 / segments.length;
    const [modalVisible, setModalVisible] = useState(false);

    const spinWheel = () => {
      const randomSpin = Math.floor(Math.random() * 6) + 5; // Entre 5 et 10 tours
      const extraRotation = Math.floor(Math.random() * 360); // Ajoute une variation aléatoire
      const newRotation = totalRotation + randomSpin * 360 + extraRotation; // Rotation cumulée

      setTotalRotation(newRotation); // Met à jour l'état pour garantir un mouvement toujours positif

      Animated.timing(rotateValue, {
        toValue: newRotation,
        duration: 3000,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }).start(() => {
        // Calcule le segment sélectionné après la rotation
        const finalRotation = newRotation % 360;
        const selected = Math.floor((360 - finalRotation) / segmentAngle) % segments.length;
        setSelectedSegment(segments[selected]);
      });
    };

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
            <Text style={styles.buttonText}>personnaliser la roue</Text>
        </TouchableOpacity>
        <ModalPopUp
            isVisible={modalVisible}
            onBackdropPress={() => setModalVisible(false)}
            segments={segments}
            setSegments={setSegments}
            colors={colors}
            setColors={setColors}
        />
      <View style={styles.wheelContainer}>
        <Animated.View
          style={{
            transform: [
              {
                rotate: rotateValue.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          }}
        >
          <Svg width={250} height={250} viewBox="0 0 250 250">
            <G x="125" y="125">
              {segments.map((label, index) => {
                const startAngle = index * segmentAngle;
                const endAngle = (index + 1) * segmentAngle;
                return (
                  <G key={index}>
                    <Path d={createSegmentPath(startAngle, endAngle, 100)} fill={colors[index]} stroke="black" />
                  </G>
                );
              })}
            </G>
          </Svg>
        </Animated.View>
        <View style={styles.pointer} />
      </View>
      <TouchableOpacity style={styles.button} onPress={spinWheel}>
        <Text style={styles.buttonText}>Lancer la roue</Text>
      </TouchableOpacity>
      {selectedSegment && <Text style={styles.resultText}>Résultat : {selectedSegment}</Text>}
    </View>
  );
};

// Création d'un segment en SVG (simplifié avec des triangles)
const createSegmentPath = (startAngle: number, endAngle: number, radius: number) => {
  const start = polarToCartesian(0, 0, radius, startAngle);
  const end = polarToCartesian(0, 0, radius, endAngle);
  return `M 0,0 L ${start.x},${start.y} A ${radius},${radius} 0 0,1 ${end.x},${end.y} Z`;
};

// Conversion polaire → cartésienne
const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' },
  wheelContainer: { position: 'relative', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  pointer: { position: 'absolute', top: -10, width: 20, height: 20, backgroundColor: 'black', borderRadius: 10 },
  button: { backgroundColor: 'black', padding: 10, borderRadius: 5 },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  resultText: { marginTop: 20, fontSize: 20, fontWeight: 'bold' },
});

export default Wheel;
