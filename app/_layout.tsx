import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { createStackNavigator } from '@react-navigation/stack'
import AppScreen from "@/app/screens/app";

const Stack = createStackNavigator()

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="screens/app">
        <Stack.Screen name="screens/app" options={{ headerShown: false }} component={AppScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
