import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import {
  LineChart,
  ContributionGraph
} from 'react-native-chart-kit'

export default function App() {
  const data = {
    labels: ['23/9', '25/9', '27/9', '1/10', '3/10', '5/10'],
    datasets: [{
      data: [20, 45, 28, 80, 99, 43]
    }]
  }
  const commitsData = [
    { date: '2017-01-02', count: 1 },
    { date: '2017-01-03', count: 2 },
    { date: '2017-01-04', count: 3 },
    { date: '2017-01-05', count: 4 },
    { date: '2017-01-06', count: 5 },
    { date: '2017-01-30', count: 2 },
    { date: '2017-01-31', count: 3 },
    { date: '2017-03-01', count: 2 },
    { date: '2017-04-02', count: 4 },
    { date: '2017-03-05', count: 2 },
    { date: '2017-02-30', count: 4 }
  ]
  const width = (Dimensions.get('window').width)-15
  return (
    <ScrollView >
        <View style={{width: width, height: 175, backgroundColor: '#fff', marginTop: 50}}>
          <Text style={{padding: 10}}>อัตราการเต้นของหัวใจ:</Text>
          <Text style={{padding: 10}}>จังหวะการเต้นของหัวใจ:</Text>
          <Text style={{padding: 10}}>เสียงการทำงานของหัวใจ:</Text>
          <Text style={{padding: 10}}>เสียงความผิดปกติของหัวใจ:</Text>
        </View>
        <View style={{height: 15}}></View>
        <LineChart
          data={data}
          width={width}
          height={200}
          chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            color: (opacity = 1) => `rgba(3, 76, 129, ${opacity})`
          }}
        />
        <View style={{height: 15}}></View>
        <ContributionGraph
          values={commitsData}
          endDate={new Date('2017-04-01')}
          numDays={105}
          width={width}
          height={200}
          chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            color: (opacity = 1) => `rgba(3, 76, 129, ${opacity})`
          }}
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});

/*const getuser = async() => {
    try{
      const list = [];
      await firestore()
        .collection("result")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(user => {
            const {rok} = user.data();
            list.push({
              rok: rok
            });
          });
        });

        setProfile(list);

        if (loading) {
          setLoading(false);
        }
      } catch(e) {
        console.log(e);
      }
    };*/