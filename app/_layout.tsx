import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { createContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

SplashScreen.preventAutoHideAsync();

interface SearchContextType {
  inputValue: string;
  setInputValue: (value: string) => void;
  searchQuery: string;
  onSearchSubmit: () => void;
}

export const SearchContext = createContext<SearchContextType>({
  inputValue: '',
  setInputValue: () => {},
  searchQuery: '',
  onSearchSubmit: () => {},
});

export default function RootLayout() {
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [fontsLoaded, fontError] = useFonts({
    'Metropolis-Regular': require('../assets/fonts/metropolis.regular.otf'),
    'Metropolis-Medium': require('../assets/fonts/metropolis.medium.otf'),
    'Metropolis-SemiBold': require('../assets/fonts/metropolis.semi-bold.otf'),
    'Metropolis-Bold': require('../assets/fonts/metropolis.bold.otf'),
  });

  const handleSearchSubmit = () => {
    setSearchQuery(inputValue);
  };

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SearchContext.Provider value={{ inputValue, setInputValue, searchQuery, onSearchSubmit: handleSearchSubmit }}>
      <View style={styles.container}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </SearchContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4518ac',
  },
});
