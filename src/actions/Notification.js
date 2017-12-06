import {
  START_FETCH_NOTIFICATION,
  GET_ALL_NOTIFICATION
} from './types';

import { API_URL, xRay } from 'react-native-dotenv';
import { AsyncStorage } from 'react-native';
import { Alert } from 'react-native';
import axios from 'axios';
import { NavigationActions } from 'react-navigation';



export function fetchAllNotification(loginToken){
	return(dispatch) => {
		axios.defaults.headers.common['xRay'] = xRay;
		axios.defaults.headers.common['token'] = loginToken;

		dispatch({ type: START_FETCH_NOTIFICATION });
		axios.post(API_URL + '/alerts/get-all').then(notification => {
			dispatch({
				type: GET_ALL_NOTIFICATION,
				payload: notification.data.alerts
			});
		}).catch(err => {
			// some err
			console.log(err);
		});
	}
}
