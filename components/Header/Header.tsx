import React from 'react';
import { StyleSheet, View } from 'react-native';
import IconButton from './IconButton';
import Logo from './Logo';
import RegionSelector from './RegionSelector';
import SearchBar from './SearchBar';
import UserAvatar from './UserAvatar';

export default function Header() {
  return (
    <View style={styles.container}>
      <Logo />
      <SearchBar />
      <RegionSelector />
      <IconButton 
        icon={require('../../assets/images/heart.svg')}
      />
      <IconButton 
        icon={require('../../assets/images/shopping-cart.svg')}
      />
      <UserAvatar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: 1200,
    height: 57,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#4518ac',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
