import {
  GET_ALL_REPAYMENTS,
  GET_INCOMING_REPAYMENTS,
	GET_OUTGOING_REPAYMENTS,
  START_FETCH_REPAYMENTS,
} from './../actions/types';

import _ from 'lodash';

const INITIAL_STATE = {
	loading: true,
	repayments: [],
  filter: "all",
}


export default function(state=INITIAL_STATE, action){
	switch(action.type){
		case START_FETCH_REPAYMENTS:
			return {...state, loading: true };

		case GET_ALL_REPAYMENTS:
			return { ...state, loading: false, repayments:action.payload, filter: "all"};

    case GET_INCOMING_REPAYMENTS:
      const incomingRepayment = _.filter(action.payload, {payments_in: true});
  		return { ...state, loading: false, repayments:incomingRepayment, filter: "incoming"};

      case GET_OUTGOING_REPAYMENTS:
        const outgoingRepayment = _.filter(action.payload, {payments_in: false});
    		return { ...state, loading: false, repayments:outgoingRepayment, filter: "outgoing"};

		default:
			return state;
	}
}
