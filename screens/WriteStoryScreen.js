import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler'
import RFValue from 'react-native-responsive-fontsize'
import db from '../config'
import firebase from 'firebase'
import { KeyboardAvoidingView, ToastAndroid } from 'react-native'

export default class WriteStoryScreen extends React.Component {
  constructor(){
    super()
    this.state={
      title:'',
      author:'',
      story:''
    }
  }
  submitStory(){
    // how do I even do this help
  }
  render(){
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView/>
        <Text style={styles.header}>Write Dem Stories</Text>
        <TextInput
          style={styles.inputFont}
          onChangeText={title => this.setState({ title })}
          placeholder={"Title"}
          placeholderTextColor={"white"}
        />
        <TextInput
          style={styles.inputFont}
          onChangeText={author => this.setState({ author })}
          placeholder={"Author"}
          placeholderTextColor={"white"}
        />
        <TextInput
          style={styles.inputFont}
          onChangeText={story => this.setState({ story })}
          placeholder={"Story"}
          multiline={true}
          numberOfLines={20}
          placeholderTextColor={"white"}
        />
        <TouchableOpacity style={styles.submitButton} onPress={this.submitStory}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    textSize:RFValue(30),
    bold:true
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    fontFamily: "Bubblegum-Sans"
  },
  inputFontLight: {
    height: RFValue(40),
    borderColor: "black",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "black",
    fontFamily: "Bubblegum-Sans"
  },
  inputFontExtra: {
    marginTop: RFValue(15)
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5)
  },
})