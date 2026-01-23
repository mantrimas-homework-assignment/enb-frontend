import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { typography } from '../../constants/typography';

export default function RegionSelector() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/lithuania-icon.svg')}
        style={styles.regionIcon}
        contentFit="contain"
      />
      <Text style={styles.text}> English EU | EUR </Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 158.17,
    height: 35,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginRight: 185,
  },
  text: {
    ...typography.regular,
    fontSize: 14,
    color: '#fff',
  },
  regionIcon: {
    width: 16,
    height: 16,
  },
});

