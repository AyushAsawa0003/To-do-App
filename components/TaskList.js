import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const TaskList = ({task, deleteTask, editTask}) => {
  //State to count the number of click
  const [clickCount, setClickCount] = useState(0);

  //for setting task is completed to default as false
  const [completed, setCompleted] = useState(false);

  //Function to count the click on '+'
  const countClick = () => {
    if (clickCount === 0) {
      setClickCount(1);
      setTimeout(() => clearCount(), 300); //After 100ms, the count will reset automatically
    } else if (clickCount === 1) {
      setCompleted(!completed);
      clearCount();
    }
  };

  //Clear the Click count
  const clearCount = () => {
    setClickCount(0);
  };

  return (
    <TouchableOpacity style={styles.taskList} onPress={countClick}>
      <View style={styles.taskListView}>
        {/* double tap to strike/remove the strike of the task in the list*/}
        <Text
          style={completed ? styles.taskListTextStrike : styles.taskListText}>
          {task.title}
        </Text>
        <View style={styles.icon}>
          <Icon
            style={styles.icon}
            name="delete"
            size={25}
            onPress={() => deleteTask(task.id)}
          />
          <Icon
            style={styles.icon}
            name="edit"
            color="darkgreen"
            size={25}
            onPress={() => {
              editTask(task.id);
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    flexDirection: 'row',
    marginLeft: 10,
    padding: 2,
  },

  taskList: {
    backgroundColor: '#5ee4eb',
    padding: 7,
    margin: 2,
  },
  taskListView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3,
  },

  taskListText: {
    fontSize: 20,
    color: 'black',
    textDecorationLine: 'none',
  },
  taskListTextStrike: {
    fontSize: 20,
    color: 'black',
    textDecorationLine: 'line-through',
  },
});

export default TaskList;
