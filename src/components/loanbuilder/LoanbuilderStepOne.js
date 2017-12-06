import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { CARD_STYLE } from './../../../assets/css/common';

class LoanbuilderStepOne extends Component {

	constructor(props){
		super(props);
	}


	static navigationOptions = ({ navigation }) => ({
		    title: <Text style={styles.textHeader}>BUILD</Text>,
		    headerStyle : {
		    	backgroundColor: "#25ADE4",
		    	height: 90,
		    },
			navigationOptions: {
	          tabBarVisible: false,
	        },
		  
		    headerLeft: <TouchableOpacity onPress={() => {navigation.dispatch(NavigationActions.navigate({routeName: 'LoanList'}))}}><Icon containerStyle={{marginLeft: 5, marginTop: 5}} name='arrow-left' type='material-community' color='#fff' size={25}/></TouchableOpacity>,
		  	headerRight: null
	});

	render(){
		return(
			<ScrollView contentContainerStyle={styles.cardStyle}>
				<TouchableOpacity style={styles.borrower} onPress={() => this.props.navigation.navigate('LoanBuilderStepTwo')}>
					<Image source={require('./../../../assets/images/builder/borrow.png')} resizeMode={'contain'} style={styles.borrowAndLend}/>
					<Text style={styles.loanTypeStyle}>BORROW</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.lender} onPress={() => this.props.navigation.navigate('LoanBuilderStepTwo')}>
					<Text style={styles.loanTypeStyle}>LEND</Text>
					<Image source={require('./../../../assets/images/builder/lend.png')}  resizeMode={'contain'} style={styles.borrowAndLend}/>
				</TouchableOpacity>

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

	cardStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		borderWidth: 0,
		margin: 4,
		borderRadius: 2,
		backgroundColor:'#fff',
		elevation: 5
	},

	borrowAndLend: {
		margin: 0,
		padding: 0,
		width: 100,
		height: 100
	},

	borrower: {
		alignItems: 'center',
		justifyContent: 'center',	
	},

	lender: {
		marginTop: 60,
		alignItems: 'center',
		justifyContent: 'center',	
	},

	loanTypeStyle: {
		fontFamily: 'open-sans', 
		color: '#25ADE4',
		fontSize: 18,
		letterSpacing: 5
	}

});

export default LoanbuilderStepOne;