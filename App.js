import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText, setEneteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInoutHandler(enterdText){
    setEneteredGoalText(enterdText);
  }

  function addGoalHanlder(){
    console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ])
  }

  return (
    <View style={styles.appConrtainer}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput}
        placeholder='Your course goal!'
        onChangeText={goalInoutHandler}/>
        <Button 
        style={styles.goalButton}
        title='Add Goal' 
        onPress={addGoalHanlder}/>
      </View>
      <View style={styles.goalContainer}>
        <ScrollView>
        {courseGoals.map((goal) => 
        <View style={styles.goalItem} key={goal}>
          <Text style={styles.goalText}>{goal}</Text>
        </View>
        )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appConrtainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  inputContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc'
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalButton:{
    tintColor: 'red',
    borderWidth: 1,
    borderRadius: 10
  },
  goalContainer:{
    flex: 5
  },
  goalItem : {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  goalText:{
    color: 'white'
  }
});
