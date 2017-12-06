import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ListView, ScrollView, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchAllNotification } from './../../actions/Notification';
import PropTypes from 'prop-types';
import NotificationCell from './NotificationCell';

class Notification extends Component {

	constructor(props){
		super(props);
	}

	async componentWillMount(){
		this.props.fetchAllNotification(this.props.token);
		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps){
		this.createDataSource(nextProps);
	}

	createDataSource(props){
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.dataSource = ds.cloneWithRows(props.notification);
	}

	 static navigationOptions = ({ navigation }) => ({
		    title: <Text style={styles.textHeader}>NOTIFICATIONS</Text>,
		    headerStyle : {
		    	backgroundColor: "#D41857",
		    	height: 90,
		    },
		  	headerLeft: null,
		  	headerRight: null
	});

	render(){
		return(
			<ScrollView style={styles.notificationWrapper}>
			{(!this.props.loading) ?
			<ListView
			enableEmptySections
			initialListSize={10}
			dataSource={this.dataSource}
			renderRow={(data, sectionID, rowID) => <NotificationCell row={rowID} notification={data} navigation={this.props.navigation} loading={this.props.loading} />}
			/>
			: <ActivityIndicator size={'small'} />}
			</ScrollView>
		);
	}
}


function mapStateToProps(state){
	return {
		token: state.auth_login.detail.loginToken,
	  notification: state.user_notification.notification,
		loading: state.user_notification.loading
	};
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


export default connect(mapStateToProps, { fetchAllNotification })(Notification);
