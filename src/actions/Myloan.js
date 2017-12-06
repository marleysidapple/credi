import {
	GET_ALL_LOANS,
	START_FETCH_LOANS
} from './types';

import { API_URL, xRay } from 'react-native-dotenv';
import { AsyncStorage } from 'react-native';
import { Alert } from 'react-native';
import axios from 'axios';
import { NavigationActions } from 'react-navigation';
import { initialParamForLoans } from './loanParams';


export function fetchAvailableLoans(loginToken){
	return(dispatch) => {
		axios.defaults.headers.common['xRay'] = xRay;
		axios.defaults.headers.common['token'] = loginToken;
		
		dispatch({ type: START_FETCH_LOANS });
		axios.post(API_URL + '/loans/get', initialParamForLoans).then(loans => {
			console.log(loans);
			dispatch({
				type: GET_ALL_LOANS,
				payload: loans
			});
		}).catch(err => {
			// some err
		});
	}
}