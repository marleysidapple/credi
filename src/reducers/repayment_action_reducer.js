import {
  START_UPDATE_REPAYMENT,
	COMPLETE_UPDATE_REPAYMENT
} from './../actions/types';


const INITIAL_STATE = {
	loading: false,
}


export default function(state=INITIAL_STATE, action){
	switch(action.type){
		case START_UPDATE_REPAYMENT:
			return {...state, loading: true };

		case COMPLETE_UPDATE_REPAYMENT:
			return { ...state, loading: false};

		default:
			return state;
	}
}
