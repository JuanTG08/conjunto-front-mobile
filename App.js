
import { NativeBaseProvider, StatusBar } from 'native-base';
import AppRoutes from './App.routes';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar />
      <AppRoutes></AppRoutes>
    </NativeBaseProvider>
  );
}
