import React, {Component} from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ListView, AsyncStorage, ActionSheetIOS } from 'react-native';
import { Icon, ButtonGroup, Badge } from 'react-native-elements';
import Moment from 'react-moment';
import { FONT_NORMAL, LOAN_FONT_COLOR, FONT_SIZE } from './../../../assets/css/common';
import { connect } from 'react-redux';
import { updateRepaymentSchedule } from './../../actions/Repayment';


class RepaymentListCell extends Component {
  constructor(props){
    super(props);
    this.state = {
      actions: [],
      clicked: null,
    }
  }

  componentWillMount(){

  }

  getRepaymentStatus(description){
    switch (description) {
      case "Pending":
        return 0;
        break;
      case "Cleared":
        return 1;
        break;
      case "Canceled":
        return 3;
        break;
      case "Overdue":
        return 4;
        break;
      case "Forgiven":
        return 5;
        break;
      default:
        return 1;
    }
  }

  showActionSheet(repayment, availableActions){
    if (availableActions != null && availableActions.length != 0){
            availableActions.map((status) => {
               this.state.actions.push(status.rst_title);
            });
          this.state.actions.push('Dismiss');
          ActionSheetIOS.showActionSheetWithOptions({
           options: this.state.actions,
           cancelButtonIndex: ((this.state.actions.length) -1),
           title: "Mark Repayment As"
         },
         (buttonIndex) => {
           if ((this.state.actions.length)-1 != buttonIndex){
             this.updateRepaymentScheduleStatus(repayment, this.getRepaymentStatus(this.state.actions[buttonIndex]));
           }
           this.setState({actions: []});
         });
       } else {
           this.state.actions.push('Silence Reminder');
           this.state.actions.push('Dismiss');
           ActionSheetIOS.showActionSheetWithOptions({
            options: this.state.actions,
            //cancelButtonIndex: 1,
            destructiveButtonIndex: 1,
          },
          (buttonIndex) => {
            this.setState({ clicked: 0 });
            this.setState({actions: []});
          });
       }
  }


  updateRepaymentScheduleStatus(repayment, updatedStatus){
    const repaymentData = {
      'loan_guid': repayment.loan_guid,
      'repayment_number': repayment.repayment_number,
      'schedule_guid': repayment.schedule_guid,
      'schedule_date': repayment.scheduled_date,
      'previous_status': repayment.status,
      'updated_status': updatedStatus,
      'transaction_type': repayment.trans_type
    }
    this.props.updateRepaymentSchedule(this.props.token, repaymentData);
  }


  render(){
    const {repayment}  = this.props;
    return(
      <TouchableOpacity style={styles.repaymentCellWrapper} key={repayment.guid} onPress={() => this.showActionSheet(repayment, repayment.myactions)}>
          <View style={styles.singleCellwrapper}>

              <View style={{flex: 1, flexDirection: 'row' }}>
                  <View style={styles.imageWrapper}>
                    <Image source={require('./../../../assets/images/payment.png')} style={{width: 70, height: 70}} resizeMode={'contain'} />
                  </View>
                  <View style={styles.repaymentDescriptionWrapper}>
                      <View style={styles.headingWrapper}>
                        <Text style={styles.headingTitle} numberOfLines={1}>{repayment.loan_alias}</Text>
                      </View>


                      <View style={styles.titleWrapper}>
                        <Text style={styles.subheadingTitle}>{repayment.loan_number}</Text>
                      </View>

                      <View style={styles.priceWrapper}>
                        <Text style={styles.priceTitle}>{repayment.currency_code} {repayment.currency_symbol}{repayment.repayment_amount}</Text>
                      </View>
                  </View>
              </View>

              <View style={styles.optionWrapper}>

                    <View style={styles.thirdOptionWrapper}>
                      <Icon name='ellipsis-h' type='font-awesome' color='#ACB9C8' size={18}/>
                      <Text style={styles.action}>{repayment.status_name}</Text>
                    </View>
                    <View style={styles.firstOptionWrapper}>
                        <Icon name='calendar' type='font-awesome' color='#ACB9C8' size={18}/>
                        <Text style={styles.date}>{repayment.scheduled_date}</Text>
                    </View>
                    <View style={styles.secondOptionWrapper}>
                    <Icon name='send-o' type='font-awesome' color='#ACB9C8' size={18}/>
                      {(repayment.payments_in) ?
                        <Text style={styles.person}>{repayment.borrower_name}</Text>
                        :<Text style={styles.person}>{repayment.lender_name}</Text>
                      }
                    </View>
              </View>
          </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  repaymentCellWrapper: {
    flex: 1,
    backgroundColor: '#F9F8FD',
    padding: 13,
  },

  singleCellwrapper: {
    padding: 10,
    borderWidth: 0,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#c9cbcc',
    shadowOffset: {
       width: 0,
       height: 0.2,
     },
     shadowRadius: 3,
     shadowOpacity: 0.4
  },

  imageWrapper: {
    width: 90,
    height: 92,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  repaymentDescriptionWrapper: {
    flex: 1,
    height: 90,
  },

  headingWrapper: {
  //  backgroundColor: 'yellow',
    height: 30,
  },

  headingTitle: {
    padding: 5,
    fontSize: 18,
    fontFamily: 'Lato',
    color: '#59748E',
  },

  titleWrapper: {
  //  backgroundColor: 'red',
    height: 30,
  },

  subheadingTitle: {
    padding: 5,
    fontFamily: 'Lato',
    fontSize: 14,
    color: '#96A2B4'
  },

  priceTitle: {
    padding: 5,
    fontFamily: 'Lato',
    fontSize: 18,
    color: '#FFC863',
    fontWeight: 'bold'
  },

  priceWrapper: {
  //  backgroundColor: 'orange',
    height: 30,
  },

  optionWrapper: {
      flexDirection: 'row',
      marginLeft: -10,
      marginRight: -10,
      height: 35,
      borderTopWidth: 2,
      borderTopColor: '#F7F8FD',
      justifyContent: 'center',
      alignItems: 'center'

  },

  firstOptionWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRightWidth: 2,
    borderRightColor: '#F7F8FD',
    alignSelf: 'center'
  },

  secondOptionWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center'
  },

  thirdOptionWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRightWidth: 2,
    borderRightColor: '#F7F8FD',
  },

  date:{
    marginLeft: 5,
    marginRight: 5,
    fontFamily: 'Lato',
    fontSize: 13,
    color: '#96A2B4',
  },

  person: {
    marginLeft: 5,
    marginRight: 5,
    fontFamily: 'Lato',
    fontSize: 13,
    color: '#96A2B4',
  },

  action: {
    marginLeft: 5,
    marginRight: 5,
    fontFamily: 'Lato',
    fontSize: 13,
    color: '#96A2B4',
  }

});

function mapStateToProps(state){
  return{
    token: state.auth_login.detail.loginToken,
  };
}

export default connect(mapStateToProps, { updateRepaymentSchedule })(RepaymentListCell);
