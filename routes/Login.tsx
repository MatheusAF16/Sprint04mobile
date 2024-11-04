import { auth } from '@/components/Firebase';
import { User } from '@/models/User.interface';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User>();
  const [isAboutViewed, setIsAboutViewed] = useState(false);

  // Verifica se a página "Sobre" já foi visitada ao iniciar o componente
  useEffect(() => {
    async function checkAboutViewed() {
      const viewedStatus = await AsyncStorage.getItem('about_viewed');
      if (viewedStatus === 'true') {
        setIsAboutViewed(true);
      }
    }

    checkAboutViewed();
  }, []);

  useEffect(() => {
    if (user?.uid) {
      navigation.navigate('Landing', { uid: user?.uid });
    }
  }, [user]);

  async function login() {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        console.log(response.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function handleAboutPress() {
    // Navega para a página "Sobre" e registra a visita
    await AsyncStorage.setItem('about_viewed', 'true');
    setIsAboutViewed(true);
    navigation.navigate('About');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>IA Future</Text>
      <Text style={styles.subtitle}>Bem-vindo!</Text>
      <TextInput
        style={styles.input}
        placeholder='Email'
        placeholderTextColor="#ffffff"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        placeholder='Senha'
        secureTextEntry={true}
        placeholderTextColor="#ffffff"
      />

      <Button title='Entrar' onPress={() => login()} color="#2f00ff" />
      <Button title='Criar Conta' onPress={() => navigation.navigate('Logon')} color="#00ffbf" />

      <Button
        title="Sobre"
        color={isAboutViewed ? 'green' : 'blue'}
        onPress={handleAboutPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue', // Fundo azul
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: 'white', // Letras brancas
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    color: 'white', // Letras brancas
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
    color: 'white', 
  },
});
