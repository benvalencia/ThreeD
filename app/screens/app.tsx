import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useMemo } from 'react'
import { StyleSheet, TouchableOpacity, View} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import HomeScreen from '@/app/screens/home/home'

export default function AppScreen() {
  const { bottom } = useSafeAreaInsets()
  const Tab = useMemo(() => createBottomTabNavigator(), [])
  const Stack = useMemo(() => createNativeStackNavigator(), [])

  const tabRoutes = [
    {
      route: 'screens/home/home',
      component: HomeScreen,
      icon: 'home',
      name: 'Home',
    },
    // {
    //   route: 'screens/news/news',
    //   component: NewsNavigation,
    //   icon: 'notifications',
    //   name: 'News',
    // },
  ]

  const TabButton = ({ tab, onPress, accessibilityState }: any) => {
    const outlineIcon = !accessibilityState ? '-outline' : ''

    return (
      <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.tabContainer}>
        <View style={[styles.animatedView]}>
          <Ionicons name={(tab.icon + outlineIcon) as any} size={25} color={'#fff'} />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab" options={{ headerShown: false }}>
        {() => (
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarStyle: [
                styles.tabNavigatorContainer,
                {
                  paddingBottom: bottom,
                  backgroundColor: '#000',
                },
              ],
            }}
          >
            {tabRoutes.map((tab, index: number) => {
              return (
                <Tab.Screen
                  name={tab.route}
                  key={index}
                  component={tab.component}
                  options={{
                    tabBarButton: (props) => <TabButton {...props} tab={tab} accessibilityState={props['aria-selected']} />,
                  }}
                />
              )
            })}
          </Tab.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  // NAVIGATOR CONTAINER
  tabNavigatorContainer: {},

  // TAB CONTAINER
  tabContainer: {
    flex: 1,
    alignItems: 'center',
  },

  // ANIMATED CONTAINER
  animatedView: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
