import React, {Component} from 'react';
import {Button} from 'react-native';

class QRButton extends Component {

    constructor(){
        super()

    }

    buttonHandler() {
        this.props.qrHandler()
    }

    render() {
        return(
            <Button title ="Scan QR Code" onPress={this.buttonHandler.bind(this)}></Button>
        )
    }
}

export default QRButton