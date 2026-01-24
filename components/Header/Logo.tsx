import { Image } from 'expo-image';
import React, { useContext } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { SearchContext } from '../../app/_layout';

export default function Logo() {
  const { setInputValue, setSearchQuery } = useContext(SearchContext);

  const handleLogoPress = () => {
    setInputValue('');
    setSearchQuery('');
  };

  return (
    <Pressable style={styles.container} onPress={handleLogoPress}>
      <Image 
        source={require('../../assets/images/eneba-logo.svg')}
        style={styles.logo}
        contentFit="contain"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  logo: {
    width: 155,
    height: 48.17,
  },
});

