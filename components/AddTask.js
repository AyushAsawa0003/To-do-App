import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const AddTask = ({title, setTitle, addTask}) => {
  return (
    <View>
      <TextInput
        value={title}
        style={styles.input}
        onChangeText={val => setTitle(val)}
        placeholder="Add task..."
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addTask(title);
          setTitle('');
        }}>
        <Text style={styles.btnText}> +</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskListView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3,
  },

  btn: {
    backgroundColor: '#11dddd',
    margin: 5,
    padding: 5,
  },

  btnText: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'black',
  },

  input: {
    fontSize: 22,
    color: 'black',
    margin: 5,
    marginTop: 10,
    opacity: 50,
    borderWidth: 1,
  },
});

export default AddTask;
