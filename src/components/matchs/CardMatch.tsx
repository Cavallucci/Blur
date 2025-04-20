import { Image, Text, View } from 'react-native';
import { MatchType } from '../../types';

const styles = {
    pictureInfosContainer: {
        borderRadius: 50,
        justifyContent: 'center',
        marginTop: 50,
        paddingBottom: 50,
        borderColor: 'lightgrey',
        borderWidth: 1,
    },
    profilePicture: {
        borderRadius: 50,
        height: 350,
        width: 350,
    },
    infosContainer: {
        justifyContent: 'space-evenly',
        padding: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    profession: {
        fontSize: 22,
    },
    interests: {
        flexDirection: 'row',
    },
    item: {
        fontSize: 20,
        padding: 5,
        margin: 5,
        backgroundColor: 'lightgrey',
        borderRadius: 15,
    },
    description: {
        fontSize: 20,
        paddingTop: 10,
    },
};

type CardMatchProps = {
    match: MatchType;
}

const CardMatch = ({ match }: CardMatchProps) => {
    return (
    <View style={styles.pictureInfosContainer}>
        <Image
        source={{ uri: 'data:image/png;base64,' + match?.profilePhoto }}
        style={styles.profilePicture}
        />
        <View style={styles.infosContainer}>
        <Text style={styles.title}>{match?.firstName}, {match?.age}</Text>
        <Text style={styles.profession}>{match?.profession}</Text>
        <View style={styles.interests}>
        {match?.interests.map((item) => (
            <View key={item}>
            <Text style={styles.item}>{item}</Text>
            </View>
        ))}
        </View>
        <Text style={styles.description}>{match?.description}</Text>
        </View>
    </View>
    );
};

export default CardMatch;
