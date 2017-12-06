import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

class Index extends Component {
	constructor(props){
		super(props);
	}


	render(){
		return(
			<View style={styles.indexWrapper}>
					<Image source={require('./../assets/images/logo-large.png')} style={styles.logo}  resizeMode={'contain'} />
					<Text style={styles.main}>Relationship Lending Platform</Text>

					<TouchableOpacity style={styles.startButton} >
						<Button
						  onPress={() => this.props.navigation.navigate('Login')}
						  buttonStyle={{backgroundColor: '#86C15D', borderRadius: 2}}
						  textStyle={{textAlign: 'center', fontFamily: 'open-sans'}}
						  title={`Get Started`}
						/>
					</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  main: {
   fontFamily: 'open-sans',
   marginTop: 5,
   color: '#fff'
  },

  indexWrapper: {
  	flex: 1,
  	backgroundColor: '#3EA7D9',
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {
  	alignSelf: 'center',
		width: 180,
		height: 150
  },

  startButton: {
  	marginTop: 20,
  	alignSelf: 'stretch'
  }
});


export default Index;
