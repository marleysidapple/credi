
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './src/Index';
import AppWithNavigationState from './src/routes/Router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducers from './src/reducers';

const store = applyMiddleware(thunk, promise)(createStore);

class App extends Component {

  constructor(props){
    super(props);
  }


  render() {
    return (
      <View style={styles.container}>
          <Provider store={store(reducers)}>
              <AppWithNavigationState />
          </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
  },

 containerFull: {

 },
});

export default App;
