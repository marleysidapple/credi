import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { CARD_STYLE } from './../../../assets/css/common';
import { NavigationActions } from 'react-navigation';


class Esign extends Component {

	constructor(props){
		super(props);
	}

	 _signaturePadError = (error) => {
	    console.error(error);
	  };

	  _signaturePadChange = ({base64DataUrl}) => {
	    console.log(base64DataUrl);
	  };


	  signatureInstance(){
	  	return <SignaturePad onError={this._signaturePadError} onChange={this._signaturePadChange}  style={styles.signatureWrapper} />;
	  }

	static navigationOptions = ({ navigation }) => ({
		    title: <Text style={styles.textHeader}>ISSUE REQUEST</Text>,
		    headerStyle : {
		    	backgroundColor: "#25ADE4",
		    	height: 90,
		    },
			navigationOptions: {
	          tabBarVisible: false,
	        },

		    headerLeft: <TouchableOpacity onPress={() => {navigation.dispatch(NavigationActions.navigate({routeName: 'LoanBuilderStepFour'}))}}><Icon containerStyle={{marginLeft: 5, marginTop: 5}} name='arrow-left' type='material-community' color='#fff' size={25}/></TouchableOpacity>,
		  	headerRight: null
	});

	render(){
		return(
			<View style={styles.cardStyle}>
				<View style={styles.issueInformation}>
					<Text style={styles.esignInfo}>Please sign on the dotted line to send loan request to Jon Evans</Text>
				</View>


          		<View style={styles.signatureContainer}>
          				{this.signatureInstance()}
                     <View>
                     	<Text style={{fontFamily: 'open-sans'}} onPress={() => this.props.navigation.navigate('Esign')}>Redraw</Text>
                     </View>
                </View>

                <View style={styles.stepAction}>
					<Button
					  fontFamily='open-sans'
					  backgroundColor= '#25ADE4'
					  onPress={() => this.props.navigation.navigate('Esign')}
					  raised
					  title='SEND LOAN' />
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

	cardStyle: {
		flex: 1,
		borderWidth: 0,
		margin: 4,
		borderRadius: 2,
		backgroundColor:'#fff',
		elevation: 5
	},

	issueInformation: {
		marginTop: 15,
		alignContent: 'center',
		padding: 20
	},

	esignInfo: {
		textAlign: 'center',
		fontFamily: 'open-sans',
	},

	stepAction: {
		marginTop: 30,
		marginBottom: 40
	},

	signatureContainer: {
		 flex: 1,
		 borderWidth: 0.5,
		 borderStyle: 'dotted',
		 borderColor: '#c9c9c9',
		 margin: 15
		// borderColor: 'black'
	},

	signatureWrapper: {
		margin: 20
	}



});

export default Esign;
