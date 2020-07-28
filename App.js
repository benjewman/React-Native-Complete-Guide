import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }])
  };

  const removeGoalHandler = goalKey => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalKey)
    });
  }
  
  return (
    <View style={styles.screen}>
      <GoalInput addGoalHandler={addGoalHandler}/>
      <FlatList 
        data={courseGoals} 
        renderItem={itemData => <GoalItem onDelete={removeGoalHandler.bind(this, itemData.item.key)} title={itemData.item.value} />} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
