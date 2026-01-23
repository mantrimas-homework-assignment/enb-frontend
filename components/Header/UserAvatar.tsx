import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function UserAvatar() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/avatar.svg')}
        style={styles.avatarIcon}
        contentFit="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 52,
    height: 52,
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatarIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#c5b1f1',
    overflow: 'hidden',
  },
});

