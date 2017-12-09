import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Input extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  			 <View style={styles.singleInputWrapper}>
                  <Icon style={styles.iconWrapper} name={this.props.iconName} size={18} color="#fff" />
                  <View style={styles.inputWrapper}>
                    <TextInput style={styles.textInputStyle}
                               autoCapitalize={'none'}
                               value={this.props.value}
                               onChangeText={this.props.onInputChange}
                               placeholder={this.props.placeholder}
                               keyboardType={this.props.keyboardType}
                               placeholderTextColor={'#fff'}
                               autoCorrect = {false}
                               returnKeyType={this.props.returnKeyType}
                               onSubmitEditing={()=>Keyboard.dismiss()}
                               secureTextEntry={this.props.secureTextEntry || false}
                               />
                  </View>
          </View>
      </TouchableWithoutFeedback>
		);
	}

}

const styles = StyleSheet.create({
	inputWrapper: {
    borderBottomColor: '#fff',
    borderBottomWidth: 0.5,
    flex: 1,
    marginRight: 5
  },

  textInputStyle: {
    color: '#fff',
    fontSize: 14,
    margin: 10,
    height: 35,
		fontFamily: 'Lato'
  },

  singleInputWrapper: {
      flexDirection: 'row'
  },

  iconWrapper: {
    textAlign: 'center',
    paddingTop: 20,
    paddingLeft: 10
  },
});

export default Input;
