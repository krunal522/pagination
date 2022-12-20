import React, { usestate, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import {Navigator} from './Component/Navigation/navigator';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default Home;
