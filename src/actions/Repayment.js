import {
	GET_ALL_REPAYMENTS,
  GET_INCOMING_REPAYMENTS,
	GET_OUTGOING_REPAYMENTS,
  START_FETCH_REPAYMENTS,
	START_UPDATE_REPAYMENT,
	COMPLETE_UPDATE_REPAYMENT
} from './types';

import { API_URL, xRay } from 'react-native-dotenv';
import { AsyncStorage, Alert } from 'react-native';
import axios from 'axios';
import { NavigationActions } from 'react-navigation';



export function fetchAllRepayments(loginToken, client_guid){
	return(dispatch) => {
		axios.defaults.headers.common['xRay'] = xRay;
		axios.defaults.headers.common['token'] = loginToken;

		dispatch({ type: START_FETCH_REPAYMENTS });
		axios.post(API_URL + '/current-loans/get-mobile-repayments', {client_guid: client_guid}).then(repayments => {
			dispatch({
				type: GET_ALL_REPAYMENTS,
				payload: repayments.data
			});
		}).catch(err => {
			// some err
			console.log(err);
		});
	}
}

export function fetchIncomingRepayments(loginToken, client_guid){
	return(dispatch) => {
		axios.defaults.headers.common['xRay'] = xRay;
		axios.defaults.headers.common['token'] = loginToken;

		dispatch({ type: START_FETCH_REPAYMENTS });
		axios.post(API_URL + '/current-loans/get-mobile-repayments', {client_guid: client_guid}).then(repayments => {
			dispatch({
				type: GET_INCOMING_REPAYMENTS,
				payload: repayments.data
			});
		}).catch(err => {
			// some err
			console.log(err);
		});
	}
}

export function fetchOutgoingRepayments(loginToken, client_guid){
	return(dispatch) => {
		axios.defaults.headers.common['xRay'] = xRay;
		axios.defaults.headers.common['token'] = loginToken;

		dispatch({ type: START_FETCH_REPAYMENTS });
		axios.post(API_URL + '/current-loans/get-mobile-repayments', {client_guid: client_guid}).then(repayments => {
			dispatch({
				type: GET_OUTGOING_REPAYMENTS,
				payload: repayments.data
			});
		}).catch(err => {
			// some err
			console.log(err);
		});
	}
}

export function updateRepaymentSchedule(loginToken, repaymentData){
	return(dispatch) => {
		axios.defaults.headers.common['xRay'] = xRay;
		axios.defaults.headers.common['token'] = loginToken;

		dispatch({ type: START_UPDATE_REPAYMENT });
		axios.post(API_URL + '/current-loans/update-transaction', repaymentData).then(response => {
		dispatch({type: COMPLETE_UPDATE_REPAYMENT});
			Alert.alert(
				'Information',
				'Repayment status updated Successfully'
			)
		}).catch(err => {
			// some err
			console.log(err);
		});
	}
}
