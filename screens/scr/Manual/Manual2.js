import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import {
    AppIcon,
    AppStyles,
  } from "../../AppStyles";
const app = ({ navigation }) => {

    const onBack = async () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={[styles.title]}>Manual Page 2</Text>
            </View>
            <View style={{ alignItems: 'stretch', justifyContent: 'center', }}>
                <TouchableOpacity style={[styles.facebookContainer, { marginTop: 420 }]} onPress={onBack}>
                    <Text style={[styles.facebookText]}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    check: {
        flexDirection: "row",
        padding: 5
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftTitle: {
        alignSelf: "stretch",
        textAlign: "left",
        marginLeft: 20
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 20,
    },
    linearGradient: {
        width: 170,
        height: 170,
        borderRadius: 170 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 40,
        color: 'white'
    },
    secsStyle: {
        fontSize: 18,
        color: 'white',
        opacity: 0.7
    },
    button: {
        fontSize: 20,
        padding: 15
    },
    facebookContainer: {
        width: AppStyles.buttonWidth.main,
        backgroundColor: AppStyles.color.tint,
        borderRadius: AppStyles.borderRadius.main,
        alignItems: "center",
        justifyContent: 'center',
        padding: 10,
        marginTop: 30
    },
    facebookText: {
        color: AppStyles.color.white
    }
});

export default app;
