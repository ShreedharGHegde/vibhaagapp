import React, { Component } from "react";
import { View, StyleSheet, AsyncStorage, Text } from "react-native";
import LogOut from "./android/app/src/components/LogOut";
import LogIn from "./android/app/src/components/LogIn";
import Scanner from "./android/app/src/components/Scanner";
import QRButton from "./android/app/src/components/ScanQRButton";
import Spinner from "./android/app/src/components/Spinner";

import axios from "axios";
// import Message from "./android/app/src/components/Message";

class App extends Component {
  constructor() {
    super();
    //by default login page is shown to the user
    this.state = {
      show: "loginPage"
    };

    this.loginHandler = this.loginHandler.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
    this.qrHandler = this.qrHandler.bind(this);
    this.logoutHandler = this.logoutHandler.bind();
    this.logoutButtonHandler = this.logoutButtonHandler.bind(this);
    this.messageHandler = this.messageHandler.bind(this);
  }

  loginHandler(email, password) {
    //email and password is received from the LogIn component and spinner is rendered untill the axios call is made
    this.setState({
      show: "spinner"
    });

    //axios call is made to server for login
    axios
      .post("http://192.168.0.107:9001/login", {
        email: email,
        password: password
      })
      .then(res => {
        //if the token is received and success is true then user is authorised
        if (res.data.success) {
        //received jwt token is stored in local storage of app

          AsyncStorage.setItem("token", JSON.stringify(res.data.token));
          //once the jwt is stored in local storage of app, scanner button is displayed
          this.setState({
            show: "scannerButton"
          });
        }else{
          //login page is displayed after 3 seconds
          setTimeout(() => {
            this.setState({
              show: "loginPage"
            });
          }, 3000);

          //if there is an error, error message is displayed for 3 seconds
          this.setState({
            show: "errorMessage"
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  qrHandler() {
    //qrscanner is shown after login is successful
    this.setState({
      show: "qrScanner"
    });
  }

  logoutButtonHandler() {
    //logout button is shown if the scan is successfull
    this.setState({
      show: "logOutButton"
    });
  }

  logoutHandler() {
    //shown if user clicks logout button
    this.setState({
      show: "loginPage"
    });
  }

  messageHandler(value) {
    //if the scan is successful success message is displayed for 3 seconds and then logout button is shown
    if (value) {
      setTimeout(() => {
        this.setState({
          show:'logOutButton'
        })
      }, 3000)
      this.setState({
        show: "successMessage"
      });
    }
  }

  renderComponent() {
    switch (this.state.show) {
      case "loginPage":
        return <LogIn loginHandler={this.loginHandler} />;
      case "qrScanner":
        return <Scanner messageHandler={this.messageHandler} />;
      case "scannerButton":
        return <QRButton qrHandler={this.qrHandler} />;
      case "logOutButton":
        return <LogOut logoutHandler={this.logoutHandler} />;
      case "spinner":
        return <Spinner />;
      case "successMessage":
        return (
          <Text
            style={{ fontWeight: "bold", textAlign: "center", color: "green" }}
          >
            scan success
          </Text>
        );
      case "errorMessage":
        return (
          <Text
            style={{ fontWeight: "bold", textAlign: "center", color: "red" }}
          >
            Invalid email or Password
          </Text>
        );
    }
  }

  render() {
    return <View style={styles.container}>{this.renderComponent()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    flex: 1,
    justifyContent: "center"
  }
});

export default App;
