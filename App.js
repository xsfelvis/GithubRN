/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import configureStore from './app/store';
import getRouter from './app/router';
import {Provider} from 'react-redux';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    constructor(){
        super();
        this.state = {
            store: configureStore()
        }
    }




    render() {
    return (
        <Provider store={this.state.store}>
            {getRouter()}
        </Provider>
    );
  }
}


