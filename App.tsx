import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import AppNavigation from './src/navigation';
import './src/services/i18n';
import {store} from 'src/store';

// (?) Maybe Move GestureHandlerRootView to only desired component
const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.safeArea}>
        <Provider store={store}>
          <GestureHandlerRootView style={s.gestureView}>
            <AppNavigation />
          </GestureHandlerRootView>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const s = StyleSheet.create({
  safeArea: {flex: 1},
  gestureView: {flex: 1},
});

export default App;
