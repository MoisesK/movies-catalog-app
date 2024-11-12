import React from "react";
import {Text, View, Image, TouchableOpacity, StyleSheet, Modal} from "react-native";

export default function MovieDetails({ data, close }) {
    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.closeBtn} onPress={() => close()}>
                    <Text style={{ color: 'white', fontSize: 18 }}>FECHAR</Text>
                </TouchableOpacity>

                <Text style={styles.title}> {data.nome} </Text>
                <Text style={styles.sinopse}> Sinopse:</Text>
                <Text style={styles.sinopseText}> {data.sinopse} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: "flex-end"
    },
    modalContainer: {
        height: '80%',
        backgroundColor: '#121212',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
    },
    closeBtn: {
        backgroundColor: '#E52246',
        padding: 10,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
    },
    title: {
        color: 'white',
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10
    },
    sinopse: {
        color: 'white',
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 10
    },
    sinopseText: {
        marginLeft: 10,
        color: 'white',
        fontSize: 15,
        marginRight: 10
    }
})