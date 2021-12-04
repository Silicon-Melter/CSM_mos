import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Image, Switch } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    AppIcon,
    AppStyles,
} from "../../AppStyles";
import ToggleSwitch from 'toggle-switch-react-native'
const app = ({ navigation }) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Image
                        source={require('../../../assets/images/menu-bg.jpeg')}
                        style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
                    />
                    <View style={{ marginLeft: 20 }}>
                        <Title style={[styles.title, {
                            marginTop: 15,
                            marginBottom: 5,
                        }]}>ผม เอง</Title>
                    </View>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="map-marker-radius" color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>สถานที่</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="phone" color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>000 000000</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>555@email.com</Text>
                </View>
            </View>
            <ToggleSwitch
                isOn={isEnabled}
                onColor="green"
                offColor="grey"
                label="Setting 1"
                labelStyle={{ color: "black", fontWeight: "900" }}
                size="medium"
                onToggle={setIsEnabled}
            />
            
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    check: {
        flexDirection: "row",
        padding: 5
    },
    container: {
        flex: 1,
        marginTop: 35
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
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});

export default app;
