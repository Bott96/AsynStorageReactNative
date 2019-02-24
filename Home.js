import React from 'react';
import { AsyncStorage, Keyboard, Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: ''
    }
  }



  saveData = () => {

    const { fname, lname } = this.state;

    let myArray = {
      fname: fname,
      lname: lname
    }
    AsyncStorage.setItem('myArray', JSON.stringify(myArray));
    Keyboard.dismiss();
    alert(fname + ' ' + lname + " data successful stored");


    this.props.navigation.navigate("Profile");
  }



  render() {
    return (
      <View style={styles.container}>

        <TextInput
          placeholder="firstName"
          style={styles.input}
          onChangeText={fname => this.setState({ fname })}
        />

        <TextInput
          placeholder="Last Name"
          style={styles.input}
          onChangeText={lname => this.setState({ lname })}
        />

        <Button
          title="save Data"
          onPress={this.saveData}
          color='green'

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
