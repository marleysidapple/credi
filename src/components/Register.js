import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Input from './../elements/Input';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

class Register extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<View style={styles.loginWrapper}>
				<Image source={require('./../../assets/images/logo2.png')} style={styles.logo}  resizeMode={'contain'} />

				<Input iconName={'envelope-o'}
                       placeholder={'Enter your email'}
                />

                <Input iconName={'key'}
                       placeholder={'Enter your password'}
                       secureTextEntry={true}
                />

                <Input iconName={'key'}
                       placeholder={'Confirm Password'}
                       secureTextEntry={true}
                />

                <Button
						  onPress={() => this.props.navigation.navigate('Login')}
						  buttonStyle={styles.loginButton}
						  textStyle={{textAlign: 'center'}}
						  title={`Login`}
						/>

				 		<View style={styles.linkToRegister}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                              <Text style={styles.registerInfo}>{'Back to Login'}</Text>
                            </TouchableOpacity>
                       </View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	loginWrapper: {
		flex: 1,
		justifyContent: 'center',
	},

	registerInfo: {
		color: '#636A73'

	},

	linkToRegister: {
   		flexDirection: 'row',
    	alignSelf: 'center',
			marginTop: 20,
			justifyContent: 'center'		
  	},

	logo: {
	  	alignSelf: 'center'
	 },

	loginButton: {
		backgroundColor: '#3EA7D9',
		borderRadius: 2,
		marginTop: 10,
	}
})

export default Register;
