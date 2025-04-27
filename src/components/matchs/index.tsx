import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MatchType } from '../../types';
import { useEffect, useState } from 'react';
import { getNextMatch } from '../../utils/apis';
import ResumMatchView from './ResumMatchView';
import Swipe from './Swipe';
import MatchCard from './MatchCard';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
    },
    matchCardContainer: {
      flex: 1,
    },
  });

const Matchs = () => {
  const [match, setMatch] = useState<MatchType | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const [matchCard, setMatchCard] = useState<Boolean>(false);

  useEffect(() => {
    setLoader(true);
    getNextMatch().then((nextMatch) => {
      setMatch(nextMatch);
    });
    setLoader(false);
  }, []);

  const handleMatchCard = async () => {
    setMatchCard(true);
  };

  useEffect(() => {

  }, [matchCard]);

  return (
    <View style={styles.container}>
      {loader && <Text>Loading...</Text>}
      {!loader && match && (
        <>
          <View style={styles.content}>
            {!matchCard && (
              <TouchableOpacity onPress={handleMatchCard}>
                <ResumMatchView match={match} />
              </TouchableOpacity>
            )}
            {matchCard && (
              <View style={styles.matchCardContainer}>
                <MatchCard match={match} />
              </View>
            )}
          </View>
          <View style={{ flex: 0.25 }}>
            <Swipe />
          </View>
        </>
      )}
    </View>
  );
};

export default Matchs;
