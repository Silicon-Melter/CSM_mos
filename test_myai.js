import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function Model() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    
  }, []);

  const file_name = '';
  function extract_data(file_name) {

  }
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});