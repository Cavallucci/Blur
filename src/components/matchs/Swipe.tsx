import { TouchableOpacity, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const styles = {
    container: {
        display: 'flex',
        padding: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        padding: 10,
        borderRadius: 50,
        backgroundColor: 'darkorange',
        opacity: 0.9,
    },
};

const Swipe = () => {

    const handleLeft = () => {
        console.log('left');
    };

    const handleRight = () => {
        console.log('right');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleLeft} activeOpacity={0.7}>
                <Entypo name="cross" size={70} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleRight} activeOpacity={0.7}>
                <Entypo name="heart" size={70} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default Swipe;
