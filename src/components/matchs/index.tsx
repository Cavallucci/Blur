import { View, Text } from 'react-native';
import { MatchType } from '../../types';
import { useEffect, useState } from 'react';
import { getNextMatch } from '../../utils/apis';
import { Image } from 'react-native';

const styles = {
  container: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  profilePicture: {
    borderRadius: 50,
    height: 300,
    width: 300,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'red',
  },
  interests: {
    fontSize: 20,
    backgroundColor: 'green',
  },
  description: {
    fontSize: 20,
    backgroundColor: 'blue',
  },
};

const Matchs = () => {
  const [match, setMatch] = useState<MatchType | null>(null);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    getNextMatch().then((nextMatch) => {
      setMatch(nextMatch);
    });
    setLoader(false);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {loader && <Text>Loading...</Text>}
      {!loader && match && (
      <View style={styles.container}>
        <Image
          source={{ uri: 'data:image/png;base64,' + match?.profilePhoto }}
          style={styles.profilePicture}
        />
        <Text style={styles.title}>{match?.firstName}</Text>
        <Text style={styles.title}>{match?.age}</Text>
        <Text style={styles.interests}>{match?.interests}</Text>
      </View>
      )}
    </View>
  );
};

export default Matchs;
