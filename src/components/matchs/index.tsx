import { View, Text } from 'react-native';
import { MatchType } from '../../types';
import { useEffect, useState } from 'react';
import { getNextMatch } from '../../utils/apis';
import CardMatch from './CardMatch';
import Swipe from './Swipe';

const styles = {
  container: {
    flex: 2,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 50,
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
        <CardMatch match={match}/>
        <Swipe />
      </View>
      )}
    </View>
  );
};

export default Matchs;
