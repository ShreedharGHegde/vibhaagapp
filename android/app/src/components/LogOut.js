import React,{Component} from 'react';
import {Button} from 'react-native'

class LogOut extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return(
                <Button 
                    title="Log Out"
                    style={{alignSelf:'stretch'}}
                    onPress={ () => this.props.logoutHandler()}
                />
        )
    }
}

export default LogOut;