import React from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Fetch from '../components/fetch';

export default function App() {

  return (
    <SafeAreaView>
      <Fetch />
      <StatusBar />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

});
