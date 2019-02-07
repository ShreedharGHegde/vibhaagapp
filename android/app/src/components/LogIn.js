import React, {Component} from 'react';
import {View, Button, Text, TextInput} from 'react-native';

class LogIn extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
        }

        this.loginHandler = this.loginHandler.bind(this)
    }

    loginHandler() {
        if(this.state.email && this.state.password){
            this.props.loginHandler(this.state.email, this.state.password)
        }
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
                 <Button 
                    title="Log in" 
                    style={{ alignSelf:'stretch' }} 
                    onPress={this.loginHandler.bind(this)}
                />
            </View>
        )
    }
}

export default LogIn;