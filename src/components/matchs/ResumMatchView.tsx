import { Image, Text, View } from 'react-native';
import { MatchType } from '../../types';

const styles = {
    pictureInfosContainer: {
        flexDirection: 'column',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 50,
        marginTop: 50,
        paddingBottom: 50,
        borderColor: 'darkorange',
        borderWidth: 0.5,
    },
    profilePicture: {
        borderRadius: 50,
        height: 370,
        width: 370,
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

type ResumMatchViewProps = {
    match: MatchType;
}

const ResumMatchView = ({ match }: ResumMatchViewProps) => {
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
        <Text style={styles.description}>
            {match?.description?.slice(0, 50)}{match?.description?.length > 50 ? '…' : ''}
        </Text>
        </View>
    </View>
    );
};

export default ResumMatchView;
