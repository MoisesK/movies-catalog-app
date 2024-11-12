import React, {useState} from "react";
import {Text, View, Image, TouchableOpacity, StyleSheet, Modal} from "react-native";
import MovieDetails from "./MovieDetails";

export default function Movie({ data }) {
    const [modalVisibility, setModalVisibility] = useState(false)

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{data.nome}</Text>
            </View>

            <Image style={styles.cardImage} source={{ uri: data.foto }} />

            <View style={styles.buttonArea}>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisibility(true)}>
                    <Text style={styles.buttonText}>LEIA MAIS</Text>
                </TouchableOpacity>
            </View>

            <Modal
                visible={modalVisibility}
                transparent={true}
                animationType={'slide'}
            >
                <MovieDetails data={data} close={ () => setModalVisibility(false)} />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 15,
        elevation: 2
    },
    header: {
        padding: 15,
        borderColor: 'black',
        borderWidth: 0.2,
    },
    headerText: {
        fontSize: 18
    },
    cardImage: {
        height: 250,
        zIndex: 2
    },
    buttonArea: {
        zIndex: 9,
        marginTop: -45,
        alignItems: 'flex-end',
    },
    button: {
        backgroundColor: '#1581c4',
        width: 100,
        padding: 8,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    buttonText: {
        textAlign: "center",
        color: 'white',
        fontWeight: 'bold'
    }
})