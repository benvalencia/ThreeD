import { StyleSheet, View} from 'react-native';

import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function HomeScreen() {
  const { top, bottom } = useSafeAreaInsets()

  return (
    <View style={[{paddingTop: top, paddingBottom: bottom }]}>
      <View style={[{backgroundColor: 'red', width: 200, height: 200}]}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
