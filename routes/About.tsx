import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function About() {
  const [isViewed, setIsViewed] = useState(false);

  useEffect(() => {
    async function checkIfViewed() {
      try {
        // Recupera o valor do AsyncStorage
        const viewedStatus = await AsyncStorage.getItem('about_viewed');
        console.log("Viewed Status:", viewedStatus); // Para verificação

        // Verifica o valor e atualiza o estado
        if (viewedStatus === 'true') {
          setIsViewed(true);
        } else {
          await AsyncStorage.setItem('about_viewed', 'true');
          setIsViewed(true);
        }
      } catch (error) {
        console.error("Erro ao acessar o AsyncStorage:", error);
      }
    }

    checkIfViewed();
  }, []);

  useEffect(() => {
    console.log("isViewed state:", isViewed); // Verificação do estado
  }, [isViewed]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>IA Future</Text>
      <Text style={styles.text}>
        O IA Future é uma plataforma que utiliza inteligência artificial para prever tendências futuras com base em dados históricos. Nosso objetivo é ajudar empresas e indivíduos a tomar decisões informadas e antecipar oportunidades com confiança.
      </Text>

      <Text style={styles.title}>Como Funciona?</Text>
      <Text style={styles.subtitle}>Coleta de Dados:</Text>
      <Text style={styles.text}>
        O IA Future analisa grandes volumes de dados históricos, incluindo padrões de comportamento do cliente, dados de mercado e tendências passadas.
      </Text>
      <Text style={styles.subtitle}>Processamento Inteligente:</Text>
      <Text style={styles.text}>
        Utilizando algoritmos avançados de inteligência artificial, nossa plataforma processa e analisa esses dados para identificar padrões e tendências emergentes.
      </Text>
      <Text style={styles.subtitle}>Previsão Precisa:</Text>
      <Text style={styles.text}>
        Com base nas análises, o IA Future gera previsões sobre o comportamento futuro do mercado, permitindo que os usuários tomem decisões estratégicas com confiança.
      </Text>

      <Text style={styles.title}>Principais Recursos:</Text>
      <Text style={styles.text}>• Análise de Dados: Analise dados históricos e tendências para prever o futuro.</Text>
      <Text style={styles.text}>• Previsões Personalizadas: Receba insights personalizados com base nas necessidades e objetivos específicos.</Text>
      <Text style={styles.text}>• Integração Simples: Integre facilmente o IA Future ao seu sistema existente para uma análise contínua e automática.</Text>

      <Text style={styles.title}>Por que Escolher o IA Future?</Text>
      <Text style={styles.text}>• Decisões Informadas: Tome decisões estratégicas com base em previsões precisas e confiáveis.</Text>
      <Text style={styles.text}>• Competitividade: Antecipe-se às tendências do mercado e ganhe vantagem competitiva.</Text>
      <Text style={styles.text}>• Eficiência: Economize tempo e recursos ao automatizar processos de análise e previsão.</Text>

      <Text style={styles.text}>Comece a antecipar o futuro com o IA Future hoje mesmo!</Text>

      <Button
        title="Já Acessado"
        color={isViewed ? 'green' : 'blue'}
        onPress={() => console.log('A página foi acessada.')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: 'blue', // Fundo azul
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white', // Letras brancas
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    color: 'white', // Letras brancas
  },
  text: {
    fontSize: 14,
    color: 'white', // Letras brancas
    marginBottom: 10,
  },
});