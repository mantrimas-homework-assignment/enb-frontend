import { Image } from 'expo-image';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { typography } from '../../constants/typography';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/search.svg')}
        style={styles.searchIcon}
        contentFit="contain"
      />
      <TextInput
        style={[styles.searchInput, { outline: 'none' }]}
        placeholder="Search for games, top-ups and more"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4518ac',
    borderRadius: 0,
    width: 550,
    height: 57,
    paddingHorizontal: 15,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 19,
    color: '#fff',
    height: '100%',
    ...typography.bold,
  },
});

