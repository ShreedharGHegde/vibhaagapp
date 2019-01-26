import React, {Component} from 'react';
import {View, Button, Text, TextInput} from 'react-native';

class LogIn extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
        }

        this.buttonHandler = this.buttonHandler.bind(this)
    }

    loginHandler() {
        this.props.loginHandler(this.state.password.length)
    }
    
    buttonHandler() {
        return(
                <Button 
                    title="Log in" 
                    style={{ alignSelf:'stretch' }} 
                    onPress={this.loginHandler.bind(this)}
                />
            )
    }
    
    render() {
        return(
            <View>
                <Text style={{ textAlign: 'center' }}>Email</Text>
                <TextInput
                    placeholder="user@gmail.com"
                    style={{ textAlign: 'center' }}
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <Text style={{ textAlign: 'center' }}>Password</Text>
                <TextInput
                    placeholder="******"
                    secureTextEntry
                    style={{ textAlign: 'center'}}
                    onChangeText={password => this.setState({ password})}
                    value={this.state.password}                    
                />
                <View>
                    {this.buttonHandler()}
                </View>
            </View>
        )
    }
}

export default LogIn;