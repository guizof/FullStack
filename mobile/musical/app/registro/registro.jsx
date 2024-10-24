import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setNascimento] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    // Lógica para cadastro
    console.log('Cadastro realizado:', { nome, sobrenome, email, dataNascimento, senha });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="dataNascimento"
        value={nome}
        onChangeText={setNascimento}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        secureTextEntry
        onChangeText={setSenha}
        style={styles.input}
      />
      <Button title="Cadastrar" onPress={handleCadastro} />
      <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>
        Já tem cadastro? Faça login.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  loginText: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'center',
  },
});

export default Cadastro;
