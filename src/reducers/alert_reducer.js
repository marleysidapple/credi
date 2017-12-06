//to be added mark as read
import {
	START_FETCH_ALERT,
	GET_ALERT,
	DELETE_ALERT
} from './../actions/types';


const INITIAL_STATE = {
	loading: false,
	alerts: []
}


export default function(state=INITIAL_STATE, action){
	switch(action.type){
		case START_FETCH_ALERT:
			return {...state, loading: true};

		case GET_ALERT:
			return { ...state, loading: false, alerts:action.payload.data };

		case DELETE_ALERT:
			return { ..state, loading: false };
		default:
			return state;
	}
}
