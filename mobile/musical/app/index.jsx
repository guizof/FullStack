import React from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './login/login'; // Certifique-se de que o caminho está correto
import Registro from './registro'; // Ou './registro/registro', conforme necessário

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      {/* <Registro /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
