import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/eneba-logo.svg')}
        style={styles.logo}
        contentFit="contain"
      />
    </View>
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

