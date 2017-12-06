import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator, ListView, AsyncStorage } from 'react-native';
import Moment from 'react-moment';
import { FONT_NORMAL, LOAN_FONT_COLOR, FONT_SIZE } from './../../../assets/css/common';
import { connect } from 'react-redux';
import { validateLoginCredential } from './../../actions/Authentication';
import { fetchAvailableLoans } from './../../actions/Myloan';
import Loanlist from './../loans/Loanlist';
import { SearchBar, Icon, ButtonGroup } from 'react-native-elements';
import PropTypes from 'prop-types';



class Loans extends Component {
	constructor(props){
		super(props);
	}

	
	async componentWillMount(){
		this.props.fetchAvailableLoans(this.props.token);
		this.createDataSource(this.props);
	
		try {
			  const token = await AsyncStorage.getItem('@auth:loginToken');
			  if (token !== null){
			 		this.props.fetchAvailableLoans(token);
			  }
			} catch (error) {
			  // Error retrieving data
			}
	
	}

	componentWillReceiveProps(nextProps){
		this.createDataSource(nextProps);
	}

	createDataSource(props){
		 const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		 this.dataSource = ds.cloneWithRows(props.loanList);
	}
	

	
	 static navigationOptions = ({ navigation }) => ({
		    title: <Text style={styles.textHeader}>MY LOANS</Text>,
		    headerStyle : {
		    	backgroundColor: "#FF9F1C",
		    	height: 90,
		    },
		  	headerLeft: null,
		  	headerRight: <Icon name='plus' style={styles.addLoan} type='material-community' color='#fff'  onPress={() => navigation.navigate('LoanBuilderStepOne')} />
	});

	
	
	render(){
		const buttons = ['Borrowed', 'Lent', 'Pending', 'Draft', 'Live'];
		return(
			<View>
				<ButtonGroup buttons={buttons} containerStyle={this.buttonGroupStyle} textStyle={{fontFamily: 'open-sans', fontSize: 10}} />
				{/*<SearchBar round containerStyle={styles.searchContainerStyle} inputStyle={styles.inputContainerStyle} placeholder='Search Loans..' />*/}
				{
					(!this.props.loading) ?
						<ListView enableEmptySections  initialListSize={10} dataSource={this.dataSource} renderRow={(data, sectionID, rowID) => <Loanlist row={rowID} loan={data} navigation={this.props.navigation} loading={this.props.loading} />} />
					: <ActivityIndicator size={'small'} />
				}
			</View>
		);	
	}	
}


const styles = StyleSheet.create({
	

	searchContainerStyle: {
		backgroundColor: 'transparent',
		borderTopWidth: 0,
		borderBottomWidth: 0,
	},

	buttonGroupStyle: {
		height: 80,
	},

	inputContainerStyle: {
		backgroundColor: '#fff',
		borderColor: '#d6d4d4',
		borderWidth: 1,
		fontSize: 12,
		fontFamily: FONT_NORMAL,
	},

	textHeader: {
		fontFamily: 'open-sans-bold', 
		color: '#eee',
		fontWeight: '500',
		fontSize: 20,
		letterSpacing: 4
	},

	addLoan: {
		marginRight: 5
	},

	detail: {
		
	}

});

function mapStateToProps(state){
	return{
		token: state.auth_login.detail.loginToken,
		loading: state.user_loan.loading,
		loanList: state.user_loan.loans,
	}
}



export default connect(mapStateToProps, { fetchAvailableLoans })(Loans);