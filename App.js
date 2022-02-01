import React, {useState} from 'react';
import {
  View,
  Text,
  Items,
  StyleSheet,
  FlatList,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskList from './components/TaskList';

const App = () => {
  //to set new title of task in AddTask.js
  const [title, setTitle] = useState('');
  //to get the id of Edited task
  const [editId, setEditId] = useState('');
  //Boolean to check if edit is going on or not
  const [edit, setEdit] = useState(false);
  //State for all the tasks
  const [tasks, setTasks] = useState([
    {
      id: Math.random() * 100000,
      title: 'Practise React',
    },
    {
      id: Math.random() * 100000,
      title: 'Buy Grocery',
    },
    {
      id: Math.random() * 100000,
      title: 'Dr. Appointment',
    },
  ]);

  //Fucntion to add new task
  const addTask = () => {
    if (!edit) {
      if (title === '') {
        Alert.alert('Error', 'Enter your task title');
      } else {
        setTasks(prevTasks => {
          return [...prevTasks, {id: Math.random() * 100000, title: title}];
        });
      }
    } else {
      tasks.forEach(task => {
        if (task.id === editId) {
          task.title = title;
        }
      });
      setEdit(false);
      setEditId('');
    }
  };

  //Function to delete a task
  const deleteTask = id => {
    setTasks(prevTasks => {
      return prevTasks.filter(task => task.id !== id);
    });
  };

  //Function to edit task
  const editTask = id => {
    setEdit(true);
    setEditId(id);
    const eTask = tasks.filter(task => task.id === id);
    setTitle(eTask[0].title);
  };

  //Function to rest the list
  const resetTaskList = () => {
    setTasks('');
  };

  return (
    <View style={styles.main}>
      <Header />
      <AddTask title={title} setTitle={setTitle} addTask={addTask} />
      <FlatList
        keyExtractor={item => item.id}
        data={tasks}
        renderItem={({item}) => (
          <TaskList task={item} deleteTask={deleteTask} editTask={editTask} />
        )}
      />
      <TouchableOpacity style={styles.resetBtn} onPress={() => resetTaskList()}>
        <Text style={styles.btntext}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
  resetBtn: {
    padding: 5,
    margin: 5,
    backgroundColor: '#6bc3f2',
    alignItems: 'center',
  },
  btntext: {
    fontSize: 18,
    color: 'black',
  },
});

export default App;
