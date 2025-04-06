import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Logo from './png/Logo-full.png';

const Loader = () => {
    const [blurAmount, setBlurAmount] = useState(10);
    const [direction, setDirection] = useState(1);
    const [intervalMs, setIntervalMs] = useState<number>(40);

    useEffect(() => {
        const interval = setInterval(() => {
            setIntervalMs(40);
            setBlurAmount((prev) => {
                if (prev === 1) {
                    setIntervalMs(90);
                }
                // Si on atteint 10, on diminue
                if (prev >= 10) {
                    setDirection(-1); // Changer la direction vers la diminution
                    return prev - 1; // Diminuer le flou doucement (entiers)
                }
                // Si on atteint 1, on augmente
                if (prev <= 1) {
                    setDirection(1); // Changer la direction vers l'augmentation
                    return prev + 1; // Augmenter le flou doucement (entiers)
                }
                return prev + direction; // Suivre la direction actuelle
            });
        }, intervalMs);

        return () => clearInterval(interval);
    }, [direction, intervalMs]);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    key={'blurryImage'}
                    source={Logo}
                    style={styles.image}
                />
                <BlurView
                    style={styles.absolute}
                    blurType="light"
                    blurAmount={blurAmount}
                    reducedTransparencyFallbackColor="white"
                />
            </View>
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
    imageContainer: {
        width: 200,
        height: 200,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

export default Loader;
