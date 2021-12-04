import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
//3rd party packages
import { Audio } from 'expo-av';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import {
  AppIcon,
  AppStyles,
} from "../../AppStyles";
import storage from '@react-native-firebase/storage';
const app = ({ navigation }) => {
  const [recording, setRecording] = useState();
  const [data, setData] = useState();
  const onRecord = async () => {
    try {
      console.log('Requesting permissions..');
      console.log('Starting recording..');
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const onStop = async () => {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);
  };

  const onSubmitSteps = () => {
    alert('Uploaded!');
    navigation.replace('Monitor2')
  };

  const onUploadSubmit = async () => {
    const uploadUri = 'content://com.android.providers.downloads.documents/document/raw%3A%2Fstorage%2Femulated%2F0%2FDownload%2F2.1.png';
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    console.log(filename);
    try {
      console.log("try");
      await storage()
        .ref(filename)
        .putFile(uploadUri);
      console.log('done');
    } catch (e) {
      console.log(e);
    }
  };

  const onRequest = () => {
    fetch("http://192.168.1.12:5000/heart?heart=clotheNoisyWAV.wav", {
      method: 'POST'
   })
    .then(res => res.json())
    .then(data => {
        setData(data)
        console.log(data)
      }
    )
  }
  useEffect(() => {
    (async () => {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true
      })
    })();
  }, [])

  const progressStepsStyle = {
    activeStepIconBorderColor: '#034c81',
    activeLabelColor: '#034c81',
    activeStepNumColor: 'white',
    activeStepIconColor: '#034c81',
    completedStepIconColor: '#034c81',
    completedProgressBarColor: '#034c81',
    completedCheckColor: '#034c81'
  };

  return (
    <View style={{ flex: 1 }}>
      <ProgressSteps {...progressStepsStyle}>
        <ProgressStep label="จุดที่ 1" >
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={styles.title}>วางเสต็ตโทสโคปค้างไว้ที่จุดที่ </Text>
            <Text style={styles.title}>โปรดกลั้นหายใจระหว่างขั้นตอนนี้</Text>
            <View style={{ marginTop: 200, alignItems: 'stretch' }}>
              <View style={{ paddingVertical: 10, alignItems: 'stretch' }}>
                <Button
                  color='#FF0000'
                  onPress={onRequest}
                  title="record"
                />
              </View>
              <View style={{ paddingVertical: 10, alignItems: 'stretch' }}>
                <Button
                  color='#808080'
                  onPress={onStop}
                  title="stop"
                />
              </View>
            </View>
          </View>
        </ProgressStep>
        <ProgressStep label="จุดที่ 2" >
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={styles.title}>วางเสต็ตโทสโคปค้างไว้ที่จุดที่ 2</Text>
            <Text style={styles.title}>โปรดกลั้นหายใจระหว่างขั้นตอนนี้</Text>
            <View style={{ marginTop: 200, alignItems: 'stretch' }}>
              <View style={{ paddingVertical: 10, alignItems: 'stretch' }}>
                <Button
                  color='#FF0000'
                  onPress={onRecord}
                  title="record"
                />
              </View>
              <View style={{ paddingVertical: 10, alignItems: 'stretch' }}>
                <Button
                  color='#808080'
                  onPress={onStop}
                  title="stop"
                />
              </View>
            </View>
          </View>
        </ProgressStep>
        <ProgressStep label="จุดที่ 3" >
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={styles.title}>วางเสต็ตโทสโคปค้างไว้ที่จุดที่ 3</Text>
            <Text style={styles.title}>โปรดกลั้นหายใจระหว่างขั้นตอนนี้</Text>
            <View style={{ marginTop: 200, alignItems: 'stretch' }}>
              <View style={{ paddingVertical: 10, alignItems: 'stretch' }}>
                <Button
                  color='#FF0000'
                  onPress={onRecord}
                  title="record"
                />
              </View>
              <View style={{ paddingVertical: 10, alignItems: 'stretch' }}>
                <Button
                  color='#808080'
                  onPress={onStop}
                  title="stop"
                />
              </View>
            </View>
          </View>
        </ProgressStep>
        <ProgressStep label="จุดที่ 4" >
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={styles.title}>วางเสต็ตโทสโคปค้างไว้ที่จุดที่ 4</Text>
            <Text style={styles.title}>โปรดกลั้นหายใจระหว่างขั้นตอนนี้</Text>
            <View style={{ marginTop: 200, alignItems: 'stretch' }}>
              <View style={{ paddingVertical: 10, alignItems: 'stretch' }}>
                <Button
                  color='#FF0000'
                  onPress={onRecord}
                  title="record"
                />
              </View>
              <View style={{ paddingVertical: 10, alignItems: 'stretch' }}>
                <Button
                  color='#808080'
                  onPress={onStop}
                  title="stop"
                />
              </View>
            </View>
          </View>
        </ProgressStep>
        <ProgressStep label="จุดที่ 5" onSubmit={onSubmitSteps}>
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={styles.title}>วางเสต็ตโทสโคปค้างไว้ที่จุดที่ 5</Text>
            <Text style={styles.title}>โปรดกลั้นหายใจระหว่างขั้นตอนนี้</Text>
            <View style={{ marginTop: 200, alignItems: 'stretch' }}>
              <View style={{ paddingVertical: 10, alignItems: 'stretch' }}>
                <Button
                  color='#FF0000'
                  onPress={onRecord}
                  title="record"
                />
              </View>
              <View style={{ paddingVertical: 10, alignItems: 'stretch' }}>
                <Button
                  color='#808080'
                  onPress={onStop}
                  title="stop"
                />
              </View>
            </View>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#034c81',
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    alignSelf: 'center'
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
  }
});

export default app;
