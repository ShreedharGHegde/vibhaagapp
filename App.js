import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import LoginPage from './android/app/src/components/LoginPage';
import HomePage from './android/app/src/components/HomePage';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      show: 'LoginPage'
    }

    this.componentHandler = this.componentHandler.bind(this)

  }

  componentHandler() {
    this.setState({
      show: 'HomePage'
    })

  }

  renderComponent() {

    switch(this.state.show){
        case 'LoginPage' : return (<View style={styles.container}><LoginPage componentHandler={this.componentHandler}/></View>);
        case 'HomePage' : return ( <HomePage/>);
    }
  }

    render() {
      return(this.renderComponent())
  }
}

// const Container = DrawerNavigator({
//   Home: {
//     screen: Profile
//   },
//   Notifications: {
//     screen: Notification
//   }
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  }
})

export default App;

