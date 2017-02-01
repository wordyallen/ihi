
import React, { Component } from 'react';
import {StyleSheet, View, Text,} from 'react-native';

export default props => (

    <View style={[styles.wrapper, props.style]}>
      <Text style={styles.text}>Yo</Text>
    </View>
)

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#00C1D7',
    padding: 10,
    borderRadius: 1,

  },
  text:{
    color:'white',
    fontSize: 30,
    fontWeight: '200'
  }
});
