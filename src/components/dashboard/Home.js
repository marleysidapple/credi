import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <View style={styles.mainDashboardWrapper}>
         <View style={styles.profileSectionWrapper}>
               <View style={styles.imageWrapper}>
                 <Image source={require('./../../../assets/images/avatar.png')} style={{width: 100, height: 100}} resizeMode={'contain'} />
                   <Text style={styles.personName}>John Doe</Text>
               </View>
         </View>

         <View style={styles.userStatsWrapper}>
            <View style={styles.firstSectionWrapper}>
            <Text style={styles.loanStats}>Total Loans</Text>
              <Text style={styles.loanNumber}>2</Text>
            </View>

            <View style={styles.secondSectionWrapper}>
            <Text style={styles.lentStats}>Total Lent</Text>
              <Text style={styles.lentNumber}>$25000</Text>
            </View>

            <View style={styles.thirdSectionWrapper}>
            <Text style={styles.borrowedStats}>Total Borrowed</Text>
              <Text style={styles.borrowNumber}>$1000</Text>
            </View>
         </View>

         <View style={styles.bottomSectionWrapper}>
            <View style={styles.sectionDetail}>
              <Text style={styles.descriptionTitle}>Your Loans</Text>
            </View>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  mainDashboardWrapper: {
    flex: 1,
    backgroundColor: '#fff'
  },

  profileSectionWrapper: {
    height: 250,
    backgroundColor: '#469CB0',
  },

  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  personName: {
    fontFamily: 'Lato',
    color: '#fff',
    marginTop: 15,
    fontSize: 18
  },

  userStatsWrapper: {
    flexDirection: 'row',
    height: 80,
    borderBottomWidth: 2,
    borderBottomColor: '#F7F8FD'
  },

  firstSectionWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 2,
    borderRightColor: '#F7F8FD',
  },

  secondSectionWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 2,
    borderRightColor: '#F7F8FD',
  },

  thirdSectionWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loanStats: {
    fontFamily: 'Lato',
    color: '#96A2B4',
  },

  lentStats: {
    fontFamily: 'Lato',
    color: '#96A2B4',
  },

  borrowedStats: {
    fontFamily: 'Lato',
    color: '#96A2B4',
  },

  bottomSectionWrapper: {
    backgroundColor: '#fff'
  },

  loanNumber: {
    marginTop: 5,
    fontFamily: 'Lato',
    letterSpacing: 1,
    fontSize: 18,
    color: '#FFC863',
    fontWeight: 'bold'
  },

  lentNumber: {
    marginTop: 5,
    fontFamily: 'Lato',
    letterSpacing: 1,
    fontSize: 18,
    color: '#FFC863',
    fontWeight: 'bold'
  },

  borrowNumber: {
    marginTop: 5,
    fontFamily: 'Lato',
    fontSize: 18,
    letterSpacing: 1,
    color: '#FFC863',
    fontWeight: 'bold'
  },

  sectionDetail: {
    paddingLeft: 30,
    paddingTop: 10
  },

});

export default Home;
