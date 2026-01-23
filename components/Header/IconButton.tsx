import { Image, ImageSource } from 'expo-image';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface IconButtonProperties {
  icon: ImageSource;
  onPress?: () => void;
  iconSize?: number;
  containerWidth?: number;
  containerHeight?: number;
}

export default function IconButton({ 
  icon, 
  onPress, 
  iconSize = 24,
  containerWidth = 44,
  containerHeight = 57 
}: IconButtonProperties) {
  return (
    <View style={[styles.container, { width: containerWidth, height: containerHeight }]}>
      <Image
        source={icon}
        style={[styles.icon, { width: iconSize, height: iconSize }]}
        contentFit="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

