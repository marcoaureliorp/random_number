import React from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';

const App = () => {
  function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10);
    Alert.alert(randomNumber.toString());
  }

  return (
    <View style={styles.container}>
      <Button onPress={getRandomNumber} title="Gerar número aleatório" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
