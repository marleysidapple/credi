import { combineReducers } from 'redux';
import auth_login_reducer from './auth_login_reducer';
import loan_reducer from './loan_reducer';
import repayment_reducer from './repayment_reducer';
import repayment_action_reducer from './repayment_action_reducer';
import notification_reducer from './notification_reducer';
import AppNavigatorReducer from './AppNavigatorReducer';

export default combineReducers({
	auth_login: auth_login_reducer,
	user_loan: loan_reducer,
	nav: AppNavigatorReducer,
	user_repayment: repayment_reducer,
	user_notification: notification_reducer,
	repayment_action: repayment_action_reducer,
});
