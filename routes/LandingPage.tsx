import { Button, Text, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import axios from 'axios';
import { auth } from "@/components/Firebase";
import { database } from "@/components/Firebase";

export default function LandingPage({ navigation, route }) {
    const { uid = '' } = route.params;
    const [quote, setQuote] = useState('');

    useEffect(() => {
        getUser();
        fetchQuote();
    }, []);

    async function getUser() {
        database
            .ref(`usuario/${uid}`)
            .once('value')
            .then((snapshot) => {
                console.log(snapshot.val());
            })
            .catch((error) => {
                console.log(error);
            });
    }

    async function fetchQuote() {
        try {
            const response = await axios.get('https://api.quotable.io/random');
            console.log(response.data); 
            setQuote(`${response.data.content} — ${response.data.author}`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>IA Future</Text>
            <Text style={styles.subtitle}>Usuário Logado!!</Text>
            <Text style={styles.uidText}>{uid}</Text>
            {quote ? ( 
                <Text style={styles.quoteText}>{quote}</Text>
            ) : (
                <Text style={styles.quoteText}>Carregando citação...</Text> 
            )}
            <Button
                title="Feedback do Cliente"
                onPress={() => navigation.navigate('Feedback')}
                color="#00fde8"
            />
            <Button
                title="Meus Dados"
                onPress={() => navigation.navigate('MeusDados', { uid })}
                color="#00fde8"
            />
            <Button
                title="Sair"
                onPress={() => {
                    auth.signOut();
                    navigation.navigate('Login');
                }}
                color="#00fde8"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        color: 'white',
        marginBottom: 16,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 24,
        color: 'white',
        marginBottom: 8,
        textAlign: 'center',
    },
    uidText: {
        fontSize: 18,
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',
    },
    quoteText: {
        fontSize: 18,
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',
        fontStyle: 'italic',
    },
});
