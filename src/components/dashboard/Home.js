import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props){
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
       title: <Text style={styles.textHeader}>DASHBOARD</Text>,
       headerStyle : {
         backgroundColor: "#D41857",
         height: 90,
       },
       headerLeft: null,
       headerRight: null
 });


  render(){
    return(
     <Text>This is home</Text>
    );
  }
}

const styles = StyleSheet.create({
	textHeader: {
		fontFamily: 'open-sans-bold',
		color: '#eee',
		fontWeight: '500',
		fontSize: 20,
		letterSpacing: 3
	},

	notificationWrapper:{
	 flex: 1,
  },
});

export default Home;
