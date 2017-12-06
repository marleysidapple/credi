import React, { Component, StyleSheet } from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Loans from './../components/dashboard/Loans';
import Profile from './../components/dashboard/Profile';
import Home from './../components/dashboard/Home';
import Notification from './../components/dashboard/Notification';
import Repayments from './../components/repayments/Repayments';

//loan builder steps
import Loanroutes from './Loanroutes';


const DashboardTabsCollection = TabNavigator({
  Dashboard: {
    //screen: Loanroutes,
    screen: Home,
    navigationOptions: {
    	tabBarIcon: ({ tintColor }) => <Icon name="tachometer" type="font-awesome"  size={25} color={tintColor} />,
    }
  },
  Repayments: {
    screen: Repayments,
    navigationOptions: {
    	tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={25} color={tintColor} />,
    }
  },

  Notification: {
    screen: Notification,
    navigationOptions: {
    	tabBarIcon: ({ tintColor }) => <Icon name="contacts" size={25} color={tintColor} />,
    }
  },

  Profile: {
    screen: Profile,
    navigationOptions: {
    	title: 'Profile',
    	tabBarIcon: ({ tintColor }) => <Icon name="settings" size={25} color={tintColor} />,
    	headerLeft: null
    }
  },
},

{
  lazy: true,
  initialRouteName: 'Dashboard',
  tabBarOptions: {
    labelStyle: {
      fontFamily: 'open-sans'
    }
  },
},

);

export default DashboardTabsCollection;
