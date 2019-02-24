import React from 'react';
import { AsyncStorage, Keyboard, Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default class Second extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: ''
    }
  }



  showData = async () => {
    let myArray = await AsyncStorage.getItem('myArray');

    let d = JSON.parse(myArray);
    alert(d.fname + " " + d.lname +" <- Your data");

  }



  render() {
    return (
      <View style={styles.container}>

   
        <Button
          title="Show Data"
          onPress={this.showData}
          color='red'

        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#efefef',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "#000"
  }
});
