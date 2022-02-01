import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>To-do List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#22bbcc',
    padding: 10,
    borderBottomWidth: 1,
  },

  headerText: {
    color: 'black',
    fontSize: 22,
    alignSelf: 'center',
  },
});

export default Header;
