import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const App = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo ao App de Música</Text>
      <Button title="VAMOS DANÇAR!" onPress={() => navigation.navigate('Cadastro')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;