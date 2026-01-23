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
    width: 1200,
    height: 57,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#4518ac',
    paddingHorizontal: 20,
  },
});
