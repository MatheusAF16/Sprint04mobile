import { UserFromDatabase } from "@/models/UserFromDatabase.interface";
import { Button, Text, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { auth } from "@/components/Firebase";
import { database } from "@/components/Firebase"; 

export default function MeusDados({ navigation, route }) {
    const [user, setUser] = useState<UserFromDatabase>();
    const { uid = '' } = route.params;

    useEffect(() => {
        getUser();
    }, []); // Executa getUser apenas uma vez ao montar o componente

    async function getUser() {
        database
            .ref(`usuario/${uid}`)
            .once('value')
            .then((snapshot) => {
                setUser(snapshot.val());
                console.log(snapshot);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meus Dados</Text>
            <Text style={styles.text}>Nome: {user?.name}</Text>
            <Text style={styles.text}>Email: {user?.email}</Text>
            <Text style={styles.text}>Endereço: {user?.address}</Text>
            <Text style={styles.text}>Telefone: {user?.phone}</Text>
            <Text style={styles.text}>CNPJ: {user?.cnpj}</Text>
            <Button title="Sair" onPress={() => auth.signOut()} color="#ff0000" />
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
        color: 'white', // Título em branco
        textAlign: 'center',
        marginBottom: 24,
    },
    text: {
        fontSize: 18,
        color: 'white', // Texto dos dados em branco
        marginBottom: 12,
    },
});
