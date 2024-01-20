import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import excises from './assets/data/exercises.json'

export default function App() {
  const excise = excises[0];
  console.log(excise)
  return (
    <View style={styles.container}>
      <View style={styles.exciseContainer}>
      <Text style={styles.excisesName}>{excise.name}</Text>
      <Text style={styles.exciseSubtitle}>{excise.muscle.toUpperCase()} | {excise.equipment.toUpperCase()}</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    padding:10,
  },
  exciseContainer:{
    backgroundColor:'#fff',
    padding:10,
    borderRadius:10,
  },
  excisesName:{
    fontSize:20,
    fontWeight:'500'
  },
  exciseSubtitle:{
    color:'dimgray'
  }
});
