import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    FlatList,
} from 'react-native';

export default function Fetch() {

    const [carregando, setCarregando] = useState(true)
    const [dados, setDados] = useState([])

    useEffect(() => {
        fetch('https://cesarpiza.github.io/fetch/filmes.json')
            .then(response => response.json())
            .then(response => setDados(response))
            .catch(() => alert('Erro ao carregar lista de filmes.'))
            .finally(() => setCarregando(false))
    }, [])

    return (
        <View
        style={styles.container}
        >
            <Text
            style={styles.titulo}
            >
                {dados.titulo} - ( {dados.descricao} )
            </Text>
            {
                carregando ? <ActivityIndicator /> : (
                    <FlatList
                        data={dados.filmes}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <Text
                            style={styles.listaFilmes}
                            >
                                {item.titulo}, {item.AnoLancamento}
                            </Text>
                        }
                    />
                )
            }
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        gap: 15,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    listaFilmes: {
        fontWeight: 'bold',
        marginVertical: 5,
        padding: 8,
        backgroundColor: 'darkgray',
    }
});
