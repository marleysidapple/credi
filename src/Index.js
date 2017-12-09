import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

class Index extends Component {
	constructor(props){
		super(props);
		this.state = {
	    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
	  }
	}


	componentDidMount(){
		Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1300,              // Make it take a while
      }
    ).start();
	}


	render(){
		console.log(this.state);
		let { fadeAnim } = this.state;
		return(
					<View style={styles.indexWrapper}>
							<Animated.Image source={require('./../assets/images/logo-large.png')} style={{alignSelf: 'center', width: 180, height: 100, opacity: fadeAnim}}  resizeMode={'contain'}/>
								<Text style={styles.main}>Relationship Lending Platform</Text>


					<TouchableOpacity style={styles.startButton} >
						<Button
							onPress={() => this.props.navigation.navigate('Login')}
							buttonStyle={styles.startButtonStyle}
							textStyle={styles.startButtonTextStyle}
							title={`Get Started`}
						/>
					</TouchableOpacity>
					</View>

		);
	}
}

const styles = StyleSheet.create({
  main: {
   color: '#fff',
	 fontFamily: 'Lato'
  },

	startButtonTextStyle : {
		textAlign: 'center',
		fontFamily: 'Lato'
	},

	startButtonStyle: {
		backgroundColor: '#469CB0',
		borderRadius: 24,
		borderWidth: 0.4,
		borderColor: "#fff"
	},

  indexWrapper: {
  	flex: 1,
  	backgroundColor: '#469CB0',
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {

  },

  startButton: {
  	marginTop: 20,
		alignSelf: 'stretch'
  }
});


export default Index;
