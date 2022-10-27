
import { NativeBaseProvider, StatusBar } from 'native-base';
import AppRoutes from './App.routes';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <StatusBar />
        <AppRoutes></AppRoutes>
      </NativeBaseProvider>
    </Provider>
  );
}
