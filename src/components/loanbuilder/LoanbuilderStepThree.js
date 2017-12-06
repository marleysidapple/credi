import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Picker, Modal } from 'react-native';
import { Icon,  FormLabel, FormInput, Divider, Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import DatePicker from 'react-native-datepicker';
import ModalSelector from 'react-native-modal-selector';
import { CARD_STYLE } from './../../../assets/css/common';


class LoanBuilderStepThree extends Component {

	constructor(props){
		super(props);
	}



	static navigationOptions = ({ navigation }) => ({
		    title: <Text style={styles.textHeader}>REPAYMENTS</Text>,
		    headerStyle : {
		    	backgroundColor: "#25ADE4",
		    	height: 90,
		    },
			navigationOptions: {
	          tabBarVisible: false,
	        },
		  
		    headerLeft: <TouchableOpacity onPress={() => {navigation.dispatch(NavigationActions.navigate({routeName: 'LoanBuilderStepTwo'}))}}><Icon containerStyle={{marginLeft: 5, marginTop: 5}} name='arrow-left' type='material-community' color='#fff' size={25}/></TouchableOpacity>,
		  	headerRight: null
	});

	render(){

		const data = [
			{key: 1, section: true, label: 'Interest/Flat fee'},
			{key: 2, label: 'Interest % '},
			{key: 3, label: 'Flat Fee'},
		];

		const duration = [
			{key: 1, section: true, label: 'Duration'},
			{key: 2, label: 'Weeks'},
			{key: 3, label: 'Fortnight'},
			{key: 4, label: 'Months'},
			{key: 5, label: 'Years'},
		];

		const frequency = [
			{key: 1, section: true, label: 'Repayment Frequency'},
			{key: 2, label: 'Weekly'},
			{key: 3, label: 'Fortnightly'},
			{key: 4, label: 'Quarterly'},
			{key: 5, label: 'Semi Annually'},
			{key: 6, label: 'Anually'},
		];



		return(
			<ScrollView style={styles.cardStyle}>
				<View>
					<ModalSelector
	                    data={data}
	                    initValue="Choose Interest Type"
	                    sectionTextStyle={styles.selectStyle}
	                    optionTextStyle={styles.selectStyle}
	                    cancelStyle={{padding: 10}}
	                    supportedOrientations={['portrait']}
	                    onChange={(option)=>{ this.setState({textInputValue:option.label})}} >
						<View style={styles.formGroup}>
							<FormLabel labelStyle={styles.formLabelStyle} fontFamily={'open-sans'}>Interest Type</FormLabel>
							<FormInput containerStyle={styles.inputContainerStyle}  inputStyle={styles.inputStyle}  placeholder={'Choose Interest Type'} value={''} returnKeyType={'next'}  onSubmitEditing={()=>Keyboard.dismiss()}/>
						</View>
					</ModalSelector>
				</View>
				
				<Divider style={styles.divider} />

				<View style={styles.formGroup}>
					<FormLabel labelStyle={styles.formLabelStyle} fontFamily={'open-sans'}>Annual Interest(%)</FormLabel>
					<FormInput containerStyle={styles.inputContainerStyle}  inputStyle={styles.inputStyle}  placeholder={'e.g 5%'} returnKeyType={'next'} keyboardType={'numeric'} onSubmitEditing={()=>Keyboard.dismiss()}/>
				</View>
				<Divider style={styles.divider} />
				
				<View style={styles.formGroup}>
					<FormLabel labelStyle={styles.formLabelStyle} fontFamily={'open-sans'}>Loan Term</FormLabel>
					<FormInput containerStyle={styles.inputContainerStyleForTerm}  inputStyle={styles.inputStyle}  placeholder={'e.g. 1 year'} returnKeyType={'next'} keyboardType={'numeric'} onSubmitEditing={()=>Keyboard.dismiss()}/>	
					
					<ModalSelector
		                    data={duration}
		                    style={styles.modalStyle}
		                    initValue="Interest %"
		                    sectionTextStyle={styles.selectStyle}
		                    optionTextStyle={styles.selectStyle}
		                    cancelStyle={{padding: 10}}
		                    supportedOrientations={['portrait']}
		                    onChange={(option)=>{ this.setState({textInputValue:option.label})}} >
		                    <FormInput containerStyle={styles.inputContainerStyleForDuration}  inputStyle={styles.inputStyle}  placeholder={'Choose Duration'}  returnKeyType={'next'}  onSubmitEditing={()=>Keyboard.dismiss()}/>
		            </ModalSelector>
				</View>
				<Divider style={styles.divider} />

				<View style={styles.formGroup}>
					  <DatePicker
					        style={{flex: 1}}
					        date={''}
					        mode="date"
					        placeholder={'First Repayment Date'}
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

				<View>
					<ModalSelector
	                    data={frequency}
	                    initValue="Choose Interest Type"
	                    sectionTextStyle={styles.selectStyle}
	                    optionTextStyle={styles.selectStyle}
	                    cancelStyle={{padding: 10}}
	                    supportedOrientations={['portrait']}
	                    onChange={(option)=>{ this.setState({textInputValue:option.label})}} >
						<View style={styles.formGroup}>
							<FormLabel labelStyle={styles.formLabelStyle} fontFamily={'open-sans'}>Frequency</FormLabel>
							<FormInput containerStyle={styles.inputContainerStyle}  inputStyle={styles.inputStyle}  placeholder={'Choose Repayment Frequency'} value={''} returnKeyType={'next'}  onSubmitEditing={()=>Keyboard.dismiss()}/>
						</View>
					</ModalSelector>
				</View>
				<Divider style={styles.divider} />

				<View style={styles.stepAction}>
					<Button
					  fontFamily='open-sans'
					  backgroundColor= '#25ADE4'
					  onPress={() => this.props.navigation.navigate('LoanBuilderStepFour')}
					  raised
					  title='NEXT' />
				</View>
			</ScrollView>
		);
	}

}


const styles = StyleSheet.create({
	
	cardStyle: {
		borderWidth: 0,
		margin: 4,
		borderRadius: 2,
		backgroundColor:'#fff',
		elevation: 5,
		flex: 1
  
	},

	textHeader: {
		fontFamily: 'open-sans-bold', 
		color: '#eee',
		fontWeight: '500',
		fontSize: 20,
		letterSpacing: 4
	},

	modalStyle: {
		flex: 2,
	},

	formGroup: {
		flex: 1,
		margin: 10,
		flexDirection: 'row',
	},

	customInputStyle: {
		flex: 1,
		flexDirection: 'row',
	},

	inputContainerStyleForDuration: {
		flex: 1,
		borderBottomWidth: 0,
		marginTop: 8,
		marginLeft: 10
		
	},

	formLabelStyle: {
		flex: 1,
		color: '#333333',
		fontSize: 14,
		letterSpacing: 1,
	},

	inputContainerStyle: {
		flex: 1,
		borderBottomWidth: 0,
		marginTop: 8,
		borderColor: 'black',
	},

	inputContainerStyleForTerm: {
		flex: 1,
		borderBottomWidth: 0,
		marginTop: 8,
		borderColor: 'black',

	},

	inputStyle: {
		fontFamily: 'open-sans',
		fontSize: 14,
		color: '#333333',
	},

	divider: {
		backgroundColor: '#d3d1d1',
		height: 0.5,
		margin: 12,
	},

	selectStyle: {
		fontFamily: 'open-sans', 
		letterSpacing: 1
	},

	

});



export default LoanBuilderStepThree;