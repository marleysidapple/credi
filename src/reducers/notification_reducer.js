import {
  START_FETCH_NOTIFICATION,
  GET_ALL_NOTIFICATION
} from './../actions/types';


const INITIAL_STATE = {
	loading: true,
	notification: []
}


export default function(state=INITIAL_STATE, action){
	switch(action.type){
		case START_FETCH_NOTIFICATION:
			return {...state, loading: true };

		case GET_ALL_NOTIFICATION:
			return { ...state, loading: false, notification:action.payload};

		default:
			return state;
	}
}
