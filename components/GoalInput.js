import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }])
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
            value={enteredGoal}
            onChangeText={goalInputHandler}
            placeholder="Course Goal"
            style={styles.input}
            />
            <Button onPress={addGoalHandler} title="ADD" />
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    }
})

export default GoalInput;