import {
	HANDLE_LOGIN_FORM,
	LOGIN_USER,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILED,
	USER_DETAIL_SUCCESS,
	USER_DETAIL_FAILED,
	GET_ALL_LOANS,
	START_FETCH_LOANS
} from './types';
import { API_URL, xRay } from 'react-native-dotenv';
import { AsyncStorage } from 'react-native';
import { Alert } from 'react-native';
import axios from 'axios';
import { NavigationActions } from 'react-navigation';
import { initialParamForLoans } from './loanParams';



export function handleLoginForm({prop, value}){
	return{
		type: HANDLE_LOGIN_FORM,
		payload: {prop, value}
	};
}


export async function validateLoginCredential(user){
	axios.defaults.headers.common['xRay'] = xRay;
	return(dispatch) => {
		//for sake of showing spinner;
		dispatch({type: LOGIN_USER});

		axios.post(API_URL + '/login/sign-in', user).then(user => {
			dispatch({
				type: USER_LOGIN_SUCCESS,
				payload: user
			});
			//dispatch({ type: START_FETCH_LOANS });
			if (typeof user.data.loginToken != "undefined" ){
			try {
				  AsyncStorage.setItem('@auth:loginToken', user.data.loginToken);
				} catch (error) {
				  //show an error message
				  // Error saving data
				}
			}
		})
		.catch(err => {
			dispatch({
				type: USER_LOGIN_FAILED,
				payload: err.response
			});
		});
	}
}
