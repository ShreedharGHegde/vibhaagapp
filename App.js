
import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import LogOut from './android/app/src/components/LogOut';
import LogIn from './android/app/src/components/LogIn';
import Scanner from './android/app/src/components/Scanner';
import QRButton from './android/app/src/components/ScanQRButton';
import Spinner from './android/app/src/components/Spinner';


class App extends Component {
    
    constructor() {
        super() 
        this.state = {
            show:'loginPage'
        }

        this.loginHandler = this.loginHandler.bind(this)
        this.logoutHandler = this.logoutHandler.bind(this)
        this.qrHandler = this.qrHandler.bind(this)
        this.logoutHandler = this.logoutHandler.bind()
        this.logoutButtonHandler = this.logoutButtonHandler.bind(this)
    }

    loginHandler(passwordLength) {
        if(passwordLength >= 8){

            setTimeout( () => {
                this.setState({
                    show:'scannerButton'
                })
            }, 3000)

            this.setState( {
                show: 'spinner'
            })
            
        }
    }


    qrHandler() {
        this.setState({
            show:'qrScanner'
        })
    }

    logoutButtonHandler() {
        this.setState({
            show:'logOutButton'
        })
    }

    logoutHandler(){
        this.setState({
            show:'loginPage'
        })
    }

    renderComponent(){

        switch(this.state.show){
            case 'loginPage': return(<LogIn loginHandler={this.loginHandler}/>)
            case 'qrScanner': return(<Scanner logoutButtonHandler={this.logoutButtonHandler}/>)
            case 'scannerButton': return(<QRButton qrHandler={this.qrHandler}/>)
            case 'logOutButton': return(<LogOut logoutHandler={this.logoutHandler}/>)
            case 'spinner':return(<Spinner/>)
        }
    }



    render() {
        return (
            <View style={styles.container}>
                {this.renderComponent()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    borderWidth:1,
    borderRadius:2,
    borderColor:'#ddd',
    borderBottomWidth:0,
    shadowColor:'#000',
    shadowOffset: {width:0, height:2 },
    shadowOpacity:0.1,
    shadowRadius:2,
    elevation:1,
    marginLeft:5,
    marginRight:5,
    marginTop:10,
    flex:1,
    justifyContent:'center'

  }
});

export default App


