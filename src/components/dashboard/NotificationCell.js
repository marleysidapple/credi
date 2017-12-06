import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

class NotificationCell extends Component {

	constructor(props){
		super(props);
	}

	render(){
    const {notification}  = this.props;
		return(
					<TouchableOpacity style={styles.outerWrapper} key={notification.alertGuid}>
							<View style={styles.iconWrapper}>
								<Image source={require('./../../../assets/images/agreed.png')} resizeMode={'contain'} style={styles.iconStyle} />
							</View>
							<View style={styles.descriptionWrapper}>
								<View style={styles.description}>
										<Text style={styles.alertText} numberOfLines={1}>{notification.alert}</Text>
								</View>

								<View style={styles.alertInterval}>
									<Text style={styles.alertTime}>{notification.created}</Text>
								</View>
							</View>
					</TouchableOpacity>
		);
	}
}




const styles = StyleSheet.create({

	outerWrapper: {
		flexDirection: 'row',
		height: 80,
		borderBottomWidth: 0.5,
		borderColor: '#bdbdbf',
		backgroundColor: '#fff'
	},

	iconWrapper: {
		flex: 1,
		justifyContent: 'center'
		//backgroundColor: 'blue'
	},

	iconStyle: {
		height: 70,
		width: 70
	},

	descriptionWrapper: {
		flex: 4,
		borderLeftWidth: 0.5,
		borderColor: '#bdbdbf'
	},

	description: {
		padding: 15,
    flex: 1
	},

	alertText: {
		fontFamily: 'open-sans',
		color: "#576068",
	},

	alertInterval: {
    flex: 3,
		paddingLeft: 15,
		//paddingTop: 2
	},

	alertTime: {
		fontFamily: 'open-sans',
		color: "#576068",
		fontSize: 11
	}
});


export default NotificationCell;
