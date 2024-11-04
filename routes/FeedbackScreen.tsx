import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FeedbackScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feedback de Clientes</Text>

      {/* Feedback 1: Tech Solutions */}
      <View style={styles.feedbackContainer}>
        <Text style={styles.companyName}>Feedback da Empresa: Tech Solutions</Text>
        <Text style={styles.subtitle}>Descrição:</Text>
        <Text style={styles.text}>
          A Tech Solutions é uma empresa inovadora no setor de tecnologia da informação, especializada em oferecer soluções personalizadas para clientes em todo o mundo.
        </Text>
        <Text style={styles.subtitle}>Feedback:</Text>
        <Text style={styles.text}>
          "Utilizar o IA Future transformou nossa abordagem estratégica. As previsões baseadas em dados históricos nos ajudaram a identificar novas oportunidades de negócios que não teríamos percebido de outra forma. Agradecemos a equipe do IA Future por sua dedicação e suporte!"
        </Text>
        <Text style={styles.subtitle}>Nome do Contato:</Text>
        <Text style={styles.text}>Maria Oliveira, Diretora de Inovação da Tech Solutions</Text>
      </View>

      {/* Feedback 2: Marketing Pro */}
      <View style={styles.feedbackContainer}>
        <Text style={styles.companyName}>Feedback da Empresa: Marketing Pro</Text>
        <Text style={styles.subtitle}>Descrição:</Text>
        <Text style={styles.text}>
          A Marketing Pro é uma agência de marketing digital que oferece serviços de consultoria e implementação de estratégias para empresas de todos os tamanhos.
        </Text>
        <Text style={styles.subtitle}>Feedback:</Text>
        <Text style={styles.text}>
          "O IA Future se tornou uma ferramenta indispensável em nossas campanhas. As análises detalhadas e previsões precisas nos permitiram personalizar nossas estratégias de marketing, resultando em um aumento significativo nas taxas de conversão. Estamos muito satisfeitos com os resultados!"
        </Text>
        <Text style={styles.subtitle}>Nome do Contato:</Text>
        <Text style={styles.text}>Carlos Mendes, Gerente de Contas da Marketing Pro</Text>
      </View>

      {/* Feedback 3: Finanças Futuras */}
      <View style={styles.feedbackContainer}>
        <Text style={styles.companyName}>Feedback da Empresa: Finanças Futuras</Text>
        <Text style={styles.subtitle}>Descrição:</Text>
        <Text style={styles.text}>
          A Finanças Futuras é uma consultoria financeira que oferece assessoria em investimentos e gestão de riscos para investidores e empresas.
        </Text>
        <Text style={styles.subtitle}>Feedback:</Text>
        <Text style={styles.text}>
          "A implementação do IA Future em nossa análise de dados financeiros mudou completamente nossa forma de trabalhar. As previsões de mercado se mostraram altamente precisas, permitindo que nossos clientes tomassem decisões mais informadas e seguras. Recomendamos fortemente!"
        </Text>
        <Text style={styles.subtitle}>Nome do Contato:</Text>
        <Text style={styles.text}>Fernanda Ribeiro, Consultora Financeira da Finanças Futuras</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'blue', // Fundo azul
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white', // Título em branco
  },
  feedbackContainer: {
    marginBottom: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fundo semi-transparente para feedbacks
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white', // Nome da empresa em branco
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    color: 'white', // Subtítulos em branco
  },
  text: {
    fontSize: 14,
    marginTop: 4,
    color: 'white', // Texto em branco
  },
});
