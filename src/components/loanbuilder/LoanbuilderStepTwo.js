import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Keyboard } from 'react-native';
import { Icon,  FormLabel, FormInput, Divider, Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import DatePicker from 'react-native-datepicker'
import { CARD_STYLE } from './../../../assets/css/common';


class LoanbuilderStepTwo extends Component {

	constructor(props){
		super(props);
		 this.state = {
           // date: ''new Date(),
           date: ''
        }
	}


	static navigationOptions = ({ navigation }) => ({
		    title: <Text style={styles.textHeader}>DETAILS</Text>,
		    headerStyle : {
		    	backgroundColor: "#25ADE4",
		    	height: 90,
		    },
			navigationOptions: {
	          tabBarVisible: false,
	        },
		  
		    headerLeft: <TouchableOpacity onPress={() => {navigation.dispatch(NavigationActions.navigate({routeName: 'LoanBuilderStepOne'}))}}><Icon containerStyle={{marginLeft: 5, marginTop: 5}} name='arrow-left' type='material-community' color='#fff' size={25}/></TouchableOpacity>,
		  	headerRight: null
	});

	onDateChange(){
   		//
  	}

	render(){
		return(
			<ScrollView contentContainerStyle={ CARD_STYLE }>
				<View style={styles.formGroup}>
					<FormLabel labelStyle={styles.formLabelStyle} fontFamily={'open-sans'}>Title</FormLabel>
					<FormInput containerStyle={styles.inputContainerStyle}  inputStyle={styles.inputStyle}  placeholder={'Give it a friendly title'} returnKeyType={'next'} onSubmitEditing={()=>Keyboard.dismiss()}/>
				</View>
				<Divider style={styles.divider} />

				<View style={styles.formGroup}>
					<FormLabel labelStyle={styles.formLabelStyle} fontFamily={'open-sans'}>Total Loan Amount</FormLabel>
					<FormInput containerStyle={styles.inputContainerStyle}  inputStyle={styles.inputStyle} keyboardType={'numeric'} placeholder={'$200'} returnKeyType={'next'} onSubmitEditing={()=>Keyboard.dismiss()}/>
				</View>
				<Divider style={styles.divider} />

				<View style={styles.formGroup}>
					<FormLabel labelStyle={styles.formLabelStyle} fontFamily={'open-sans'}>Description</FormLabel>
					<FormInput containerStyle={styles.inputContainerStyle}  inputStyle={styles.inputStyle}  placeholder={'Loan Description'} onSubmitEditing={()=>Keyboard.dismiss()}  returnKeyType={'next'} />
				</View>
				<Divider style={styles.divider} />


				<View style={styles.formGroup}>
					  <DatePicker
					        style={styles.datePicker}
					        date={this.state.date}
					        mode="date"
					        placeholder={'Loan Start Date'}
					        format="YYYY-MM-DD"
					        minDate="2015-05-01"
					        maxDate="2019-06-01"
					        confirmBtnText="Confirm"
					        cancelBtnText="Cancel"
					        customStyles={{
					          dateIcon: {
					            position: 'absolute',
					            left: 10,
					            top: 4,
					            marginLeft: 0
					          },
					          dateInput: {
					          	borderWidth: 0,
					          },
					          placeholderText: {
					          	fontFamily: 'open-sans'
					          }
					        }}
					        onDateChange={(date) => {this.setState({date: date})}}
					      />
				</View>
				<Divider style={styles.divider} />


				<View style={styles.stepAction}>
					<Button
					  fontFamily='open-sans'
					  backgroundColor= '#25ADE4'
					  onPress={() => this.props.navigation.navigate('Freemium')}
					  raised
					  title='NEXT' />
				</View>


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

	formGroup: {
		margin: 20,
		flexDirection: 'row',

	},


	formLabelStyle: {
		color: '#333333',
		fontSize: 14,
		letterSpacing: 1
	},

	inputContainerStyle: {
		flex: 1,
		borderBottomWidth: 0,
		marginTop: 4,
		borderColor: 'black'
	},

	inputStyle: {
		fontFamily: 'open-sans',
		alignItems: 'flex-start',
		fontSize: 14,
		color: '#333333'
	},

	divider: {
		backgroundColor: '#d3d1d1',
		height: 0.5,
		margin: 8,
	},

	datePicker: {
		flex: 1,
	},

	stepAction: {
		padding: 10,
		flex: 1,
		
	},

});

export default LoanbuilderStepTwo;