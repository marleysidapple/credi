import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { CARD_STYLE } from './../../../../assets/css/common';
import { NavigationActions } from 'react-navigation';

class Freemium extends Component {

	constructor(props){
		super(props);
	}

	static navigationOptions = ({ navigation }) => ({
		    title: <Text style={styles.textHeader}>PRICING</Text>,
		    headerStyle : {
		    	backgroundColor: "#25ADE4",
		    	height: 90,
		    },
			navigationOptions: {
	          tabBarVisible: false,
	        },
		  
		    headerLeft: <TouchableOpacity onPress={() => {navigation.dispatch(NavigationActions.navigate({routeName: 'LoanBuilderStepThree'}))}}><Icon containerStyle={{marginLeft: 5, marginTop: 5}} name='arrow-left' type='material-community' color='#fff' size={25}/></TouchableOpacity>,
		  	headerRight: null
	});

	render(){
		return(
			<ScrollView contentContainerStyle={CARD_STYLE}>
				<Text style={styles.freeLoanInfo}>This is free loan</Text>
			</ScrollView>
		);
	}
}


const styles = StyleSheet.create({
	textHeader: {
		fontFamily: 'open-sans-bold', 
		color: '#eee',
		fontWeight: '500',
		fontSize: 20,
		letterSpacing: 4
	},

	freeLoanInfo: {
		fontFamily: 'open-sans', 
		alignContent: 'center',
		justifyContent: 'center'
	}
});

export default Freemium;