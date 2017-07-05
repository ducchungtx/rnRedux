import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = { value: 0 };
const reducer = (state = defaultState, action) => {
  if(action.type === 'UP') return { value: state.value + 1 };
  if(action.type === 'DOWN') return { value: state.value - 1 };
  return state;
};

const store = createStore(reducer);

import App from './src/App';

export default class rnRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('rnRedux', () => rnRedux);
