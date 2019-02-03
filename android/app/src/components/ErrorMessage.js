
import React, {Component} from 'react';
import {View,Text} from 'react-native';

class ErrorMessage extends Component {

    render() {
        return(
            <View><Text style={{textAlign:'center', color:'red'}}>Login failed</Text></View>
        )
    }
}

export default ErrorMessage;