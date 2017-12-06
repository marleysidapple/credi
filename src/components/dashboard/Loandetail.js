import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

class Loandetail extends Component {


	componentWillMount(){
		console.log(this.props.navigation);
	}

	static navigationOptions = ({ navigation }) => ({
		    title: <Text style={styles.textHeader}>OVERVIEW</Text>,
		    headerStyle : {
		    	backgroundColor: "#FF9F1C",
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
			<View style={styles.overviewWrapper}>
				<View style={styles.innerHeader}>
					<Text style={styles.refNo}>LOAN REF: 121290</Text>
					<View style={styles.loanAction}>
						<Text> Ed </Text>
						<Text> Ed </Text>
					</View>
				</View>

				{/* loan detail wrapper now */}
				<View style={styles.loanSpecificDetail}>
					<View style={styles.leftDetail}>
							<Avatar medium rounded
  								source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
  								onPress={() => console.log("Works!")}
  								containerStyle={styles.loanAvatar}
  								activeOpacity={0.7}
								/>
					</View>
					<View style={styles.rightDetail}>
						<Text style={styles.loanNature}>Lorem Ipsum Dolar Sit</Text>
					</View>
				</View>

				{/* loan amount */}
				<View style={styles.loanAmountWrapper}>
					<View style={styles.leftAmountDetail}>
							<Text style={styles.amount}>$600</Text>
					</View>
					<View style={styles.rightAmountDetail}>
						<Text style={styles.loanNature}>to be paid back in 6 monthly installments of $100</Text>
					</View>
				</View>
			</View>
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

	overviewWrapper: {
		margin: 15,
		padding: 15,
		flex: 1,
		backgroundColor: '#fff'
	},

	innerHeader: {
		flexDirection: 'row',
		marginBottom: 10
	},

	loanAction: {
		flex: 1,
		justifyContent: 'flex-end',
		flexDirection: 'row'
	},

	loanSpecificDetail: {
		marginTop: 15,
		flexDirection: 'row',
		borderTopWidth: 0.5,
		borderBottomWidth: 0.5,
		borderTopColor: '#b3b3bf',
		borderBottomColor: '#b3b3bf',
	},

	leftDetail: {
		flex: 1, 
		justifyContent: 'flex-start',
		padding: 20,
		borderRightWidth: 0.5,
		borderRightColor: '#b3b3bf',

	},

	rightDetail: {
		flex: 3, 
		justifyContent: 'flex-end',
		alignSelf: 'center',
		padding: 20
	},

	loanAvatar: {
		alignSelf: 'center',
	},

	loanAmountWrapper: {
		flexDirection: 'row',
		borderBottomWidth: 0.5,
		borderBottomColor: '#b3b3bf',
	},

	leftAmountDetail:{
		flex: 1, 
		justifyContent: 'flex-start',
		alignSelf: 'center',
		padding: 20,
	},

	rightAmountDetail: {
		flex: 4, 
		justifyContent: 'flex-start',
		alignSelf: 'center',
		padding: 20,
	},

	amount: {
		color: '#FF9F1C',
		fontSize: 19,
		letterSpacing: 0.5,
		fontFamily: 'open-sans-bold' 
	},

	loanNature: {
		fontFamily: 'open-sans',
		letterSpacing: 1.5,
		fontSize: 11
	},

	refNo: {
		fontFamily: 'open-sans',
		fontSize: 12,
		letterSpacing: 1.5
	}


});

export default Loandetail;