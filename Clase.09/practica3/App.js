import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductsList from './src/Screens/ProductsList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Probando FlatLists</Text>
      <ProductsList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
      fontSize: 20,
  },
});
