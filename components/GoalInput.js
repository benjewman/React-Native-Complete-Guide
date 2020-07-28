import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal animationType="slide" visible={props.visible}>
            <View style={styles.inputContainer}>
                <TextInput
                value={enteredGoal}
                onChangeText={goalInputHandler}
                placeholder="Course Goal"
                style={styles.input}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='CANCEL' color='red' onPress={props.onCancel}/>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={addGoalHandler} title="ADD" />
                    </View>
                </View>
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
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%'
    },
    button: {
        width: '40%'
    }
})

export default GoalInput;