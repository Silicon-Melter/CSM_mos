import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';

const MyDrawer = props => {
    return (
      <View style={{flex: 1}}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{backgroundColor: '#034c81'}}>
          <ImageBackground
            source={require('../../assets/images/unnamed.jpg')}
            style={{padding: 20}}>
            <Image
              source={require('../../assets/images/menu-bg.jpeg')}
              style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                marginBottom: 5,
              }}>
              ผม เอง
            </Text>
          </ImageBackground>

          <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
            <DrawerItemList {...props} />
          </View>
          
        </DrawerContentScrollView>
        <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
          <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 5,
                }}>
                Sign Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
export default MyDrawer;