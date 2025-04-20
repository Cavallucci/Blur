import { Text, TouchableOpacity, View } from 'react-native';

const styles = {
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 50,
    },
    button: {
        padding: 20,
        borderRadius: 50,
        backgroundColor: 'grey',
    },
};

const Swipe = () => {

    const handleLeft = () => {
        console.log('left');
    };

    const handleRight = () => {
        console.log('left');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleLeft} activeOpacity={0.7}>
                <Text>Left</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleRight} activeOpacity={0.7}>
                <Text>Right</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Swipe;
