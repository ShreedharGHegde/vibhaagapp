import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import LogOut from './LogOut';
import LogIn from './LogIn';


class App extends Component {
    
    constructor() {
        super() 
        this.state = {
            loggedIn: false,
            error:''
        }

        this.loginHandler = this.loginHandler.bind(this)
        this.logoutHandler = this.logoutHandler.bind(this)
    }

    

    loginHandler(passwordLength) {
        if(passwordLength >= 8){
            this.setState({
                loggedIn:true
            })
        }
    }

    logoutHandler() {
        this.setState({
            loggedIn:false
        })
    }

    renderComponent(){
        if(this.state.loggedIn){
            return(
                <LogOut logoutHandler={this.logoutHandler}/>
            )
        } else {
            return(
                <LogIn loginHandler={this.loginHandler}/>
            )
        }
    }



    render() {
        return (
            <View>
                {this.renderComponent()}
            </View>
        )
    }
}

export default App