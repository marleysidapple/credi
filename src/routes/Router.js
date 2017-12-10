import React, { Component } from 'react';
import { addNavigationHelpers, StackNavigator, TabNavigator }  from 'react-navigation';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Index from './../Index';
import Test from './../Test';
import Login from './../components/Login';
import Register from './../components/Register';

//loan routes
import Loandetail from './../components/dashboard/Loandetail';

import DashboardTabsCollection from './Tabs';

export const Router = StackNavigator({
      Landing: {
      	screen: Index,
      	navigationOptions: {
      		header: null,
      	}
      },

      Test: {
      	screen: Test,
      	navigationOptions: {
      		header: null,
      	}
      },


      Login: {
      	screen: Login,
      	navigationOptions: {
         // title: 'Login',
      		header: null,
      	}
      },

       Register: {
        screen: Register,
        navigationOptions: {
          title: 'Register',
        }
      },

      Dashboard: {
        screen: DashboardTabsCollection
      }, // end of dashboard
  }, // end of main stack navigator
{
  stateName: 'MainAppNav',
  initialRouteName: 'Landing',
  lazyLoad: true,
  animationEnabled: false,
});


const AppWithNavigationState = ({dispatch, nav}) => (
    <Router
      navigation={addNavigationHelpers({
        dispatch,
        state: nav
      })}
      />
);



const mapStateToProps = (state) => {
  return{
    nav: state.nav
  }
}

export default connect(mapStateToProps)(AppWithNavigationState);
