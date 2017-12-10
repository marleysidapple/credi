import React, { Component } from 'react';
import { Text, View, ScrollView, Image, ListView, StyleSheet, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import { Icon, ButtonGroup, Badge } from 'react-native-elements';
import { connect } from 'react-redux';

class Test extends Component {

  constructor(props) {
    super(props);

  }









 render(){
   return(
     <View style={styles.mainDashboardWrapper}>
        <View style={styles.profileSectionWrapper}>
              <View style={styles.imageWrapper}>
                <Image source={require('./../assets/images/avatar.png')} style={{width: 100, height: 100}} resizeMode={'contain'} />
                  <Text style={styles.personName}>John Doe</Text>
              </View>
        </View>

        <View style={styles.userStatsWrapper}>

        </View>

        <View style={styles.bottomSectionWrapper}>

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

  bottomSectionWrapper: {
    backgroundColor: '#fff'
  },

  userStatsWrapper: {
    backgroundColor: '#fff'
  },

  personName: {
    fontFamily: 'Lato',
    color: '#fff',
    marginTop: 15,
    fontSize: 18
  }



});






export default Test;
