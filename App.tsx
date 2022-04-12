import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import AppNavigation from './src/navigation';
import './src/services/i18n';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
  );
};

export default App;
