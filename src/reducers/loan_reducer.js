import {
	START_FETCH_LOANS,
	GET_ALL_LOANS
} from './../actions/types';


const INITIAL_STATE = {
	loading: false,
	loans: []
}


export default function(state=INITIAL_STATE, action){
	switch(action.type){
		case START_FETCH_LOANS:
			return {...state, loading: true};

		case GET_ALL_LOANS:
			return { ...state, loading: false, loans:action.payload.data.data };

		default:
			return state;
	}
}