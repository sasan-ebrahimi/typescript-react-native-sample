import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import store from './src/repo/store';
import {HomeScene} from "./src/scenes/HomeScene";

export default function App() {
    return (
        <Provider store={store}>
            <HomeScene/>
        </Provider>

    );
}

// Error Handling

