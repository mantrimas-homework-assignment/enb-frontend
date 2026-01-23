import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header/Header";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'Metropolis-Regular': require('../assets/fonts/metropolis.regular.otf'),
    'Metropolis-Medium': require('../assets/fonts/metropolis.medium.otf'),
    'Metropolis-SemiBold': require('../assets/fonts/metropolis.semi-bold.otf'),
    'Metropolis-Bold': require('../assets/fonts/metropolis.bold.otf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header />
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4518ac',
  },
});
