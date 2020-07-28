import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return (
        <Modal animationType="slide" visible={props.visible}>
            <View style={styles.inputContainer}>
                <TextInput
                value={enteredGoal}
                onChangeText={goalInputHandler}
                placeholder="Course Goal"
                style={styles.input}
                />
                <Button onPress={() => props.addGoalHandler(enteredGoal)} title="ADD" />
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    }
})

export default GoalInput;