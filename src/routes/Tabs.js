import React, { Component, StyleSheet } from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Loans from './../components/dashboard/Loans';
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
    	tabBarIcon: ({ tintColor }) => <Icon name="chart-bar-stacked" type="material-community"  size={25} color={tintColor} />,
      header: null
    }
  },
  Repayments: {
    screen: Repayments,
    navigationOptions: {
    	tabBarIcon: ({ tintColor }) => <Icon name="money" type="font-awesome" size={25} color={tintColor} />,
    }
  },

  Notification: {
    screen: Notification,
    navigationOptions: {
    	tabBarIcon: ({ tintColor }) => <Icon name="bell-o" type="font-awesome" size={25} color={tintColor} />,
    }
  },
},

{
  lazy: true,
  initialRouteName: 'Dashboard',
  tabBarOptions: {
    activeTintColor: '#469CB0',
    labelStyle: {
      fontFamily: 'Lato',
      color: '#646768'
    }
  },
},

);

export default DashboardTabsCollection;
