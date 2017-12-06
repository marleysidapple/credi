import React, { Component, StyleSheet } from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Loans from './../components/dashboard/Loans';

import Loandetail from './../components/dashboard/Loandetail';

//steps for building loan
import LoanbuilderStepOne from './../components/loanbuilder/LoanbuilderStepOne';
import LoanbuilderStepTwo from './../components/loanbuilder/LoanbuilderStepTwo';
import Freemium from './../components/loanbuilder/pricing/Freemium';
import LoanbuilderStepThree from './../components/loanbuilder/LoanbuilderStepThree';
import LoanbuilderStepFour from './../components/loanbuilder/LoanbuilderStepFour';
import Esign from './../components/loanbuilder/Esign';


const Loanroutes = StackNavigator({
    LoanList: {
       screen: Loans,
      },


    LoanDetail: {
    	screen: Loandetail,
    },

     LoanBuilderStepOne: {
        screen: LoanbuilderStepOne,
      },

     Freemium: {
        screen: Freemium
     },

      LoanBuilderStepTwo: {
        screen: LoanbuilderStepTwo,
      },

      LoanBuilderStepThree: {
        screen: LoanbuilderStepThree,
      },

      LoanBuilderStepFour: {
        screen: LoanbuilderStepFour
      },

       Esign: {
        screen: Esign,
      },
},
{
  //initialRouteName: 'LoanDetail'
  initialRouteName : 'LoanBuilderStepOne'
});


export default Loanroutes;
