import React, { Component } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon, Button, Avatar } from 'react-native-elements';
import { FONT_NORMAL, LOAN_FONT_COLOR, FONT_SIZE } from './../../../assets/css/common';
import Moment from 'react-moment';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

class Loanlist extends Component {

	constructor(props){
		super(props);
	}

	componentWillMount(){
	}


	gotoSpecificLoan(loanGuid){
				const navigateAction = NavigationActions.reset({
					stateName: 'MainAppNav',
					index: 0,
					params: { guid: loanGuid },
					actions: [NavigationActions.navigate({routeName: 'LoanDetail', params: {loanGuid}})]
				});
				this.props.navigation.dispatch(navigateAction);
	 }


	render(){
		const {loan}  = this.props;
		var row = Number(this.props.row) + 1;
			return(
				<TouchableOpacity style={(row % 2 == 1) ? styles.cardWrapper : styles.cardWrapperOne}  key={loan.guid} onPress={() => this.gotoSpecificLoan(loan.guid)} >
					<View style={styles.leftDetailWrapper}>
						<Avatar medium rounded
  								source={require('./../../../assets/images/lady.jpg')}
  								activeOpacity={0.7}
								/>
					</View>

					<View style={styles.detailWrapper}>
						<Text style={styles.amountDetail}>{'$'+loan.amount}</Text>
						<Text style={styles.loanTitle} numberOfLines={1}>{loan.alias} lorem ipsum dolar</Text>
						<Text style={styles.loanTitle} numberOfLines={1}><Moment element={Text} format="YYYY-MM-DD">{loan.created}</Moment> - <Moment element={Text} format="YYYY-MM-DD">{loan.created}</Moment></Text>
					</View>

					<View style={styles.iconStyle}>
						<Icon containerStyle={{marginLeft: 5, marginTop: 5}} name={'book-multiple'} type='material-community' color='#444445' size={20}/>
					</View>
				</TouchableOpacity>
		);
	}

}

const styles=StyleSheet.create({
	cardWrapperOne: {
	  flex: 1,
	  flexDirection: 'row',
		backgroundColor: '#fff',
		height: 85,
		padding: 20
	},

	cardWrapper: {
	    flex: 1,
	    flexDirection: 'row',
		backgroundColor: '#f2f2f2',
		height: 85,
		padding: 20
	},

	leftDetailWrapper: {
		alignSelf: 'center',
		justifyContent: 'center',
		borderRightWidth: 0.5,
		borderRightColor: '#d6d4d4',
		paddingRight: 20,
		marginRight: 20
	},

	detailWrapper: {
		flex: 1,
		//flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center'
	},

	loanTitle: {
		fontFamily: FONT_NORMAL,
		color: '#444445',
		fontSize: 11,
		paddingTop: 3,
		letterSpacing: 0.5
	},

	amountDetail: {
		fontFamily: 'open-sans-bold',
		color: '#FF9F1C',
		fontSize: 13,
		paddingTop: 3,
		letterSpacing: 1
	},

	usericon: {
	  	alignSelf: 'center',
	  	width: 50,
	  	height: 50,
	  	backgroundColor: 'transparent'

	 },

	 iconStyle: {
	 	justifyContent: 'center'
	 }

});

export default Loanlist;
