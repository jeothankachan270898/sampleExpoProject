import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button ,TextInput,FlatList,ScrollView} from 'react-native';
import { useState } from 'react';
import GoalItems from './components/GoalItem';
import GoalInputs from './components/GoalInput';

export default function App() {
const [courseGoal,setCourseGoal]=useState([])

const addGoalHandler = goalTitle => {
 setCourseGoal(currentGoals =>[...currentGoals,
  { id: Math.random().toString(),value: goalTitle}]);
};
  const removeGoalHandler = goalId => {
    setCourseGoal(currentGoals =>{
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  }
  return (
    <View style={styles.screen1}>
     <GoalInputs onAddGoal={addGoalHandler}/>
      <View>
        <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={itemData => <GoalItems  id={itemData.item.id} onDelete={removeGoalHandler}  title={itemData.item.value}/> }
        />
     </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen1: {
    padding: 40
  },
 
});
