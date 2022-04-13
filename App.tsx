import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import AppNavigation from './src/navigation';
import './src/services/i18n';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.safeArea}>
        <AppNavigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const s = StyleSheet.create({
  safeArea: {flex: 1},
});

export default App;
