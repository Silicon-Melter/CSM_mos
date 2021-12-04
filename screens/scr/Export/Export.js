import React from 'react'
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const ExportPdf = () => {

  const createPDF = async () => {
    let options = {
      html: '<h1>PDF Test<h1>',
      fileName: 'test.pdf',
      directory: 'Downloads',
    };
    let file = await RNHTMLtoPDF.convert(options)
    console.log(file.filePath);
  }
  return (
    <View>
      <TouchableOpacity style={{justifyContent: 'center',
    alignItems: 'center', marginTop: 50}} onPress={() => createPDF()}>
        <Text>Create PDF</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ExportPdf

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
  ImageStyle: {
    height: 150,
    width: 150,
    resizeMode: 'center',
  },
});