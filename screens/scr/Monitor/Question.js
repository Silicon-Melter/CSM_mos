import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView, CheckBox, } from 'react-native';
import {
    AppIcon,
    AppStyles,
  } from "../../AppStyles";
const app = ({ navigation }) => {

    const onNext = async () => {
        navigation.replace('Monitor3')
    }

    return (
        <ScrollView style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={[styles.title, styles.leftTitle]}>
                    คุณมีอาการใดต่อไปนี้บ้าง
                </Text>
                <View style={{ alignItems: "center", justifyContent: 'center', }}>
                <TouchableOpacity style={[styles.facebookContainer, { marginTop: 420 }]} onPress={onNext}>
                    <Text style={[styles.facebookText]}>ตรวจอีกรอบ</Text>
                </TouchableOpacity>
            </View>
            </View>
            
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    check: {
        flexDirection: "row",
        padding: 5
    },
    container: {
        backgroundColor: "white",
        flex: 1,
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
