import React from 'react';
import { StyleSheet, Platform, Image, Text, View,Button } from 'react-native';
import auth from '@react-native-firebase/auth';


export default class Main extends React.Component {
    state = { currentUser: null }

    componentDidMount() {
        const { currentUser } = auth()
        this.setState({ currentUser })
    }
    signOutUser = () => 
        auth().signOut().then(
            function() {
                // Sign-out successful.
                }).catch(function(error) {
                // An error happened.
            });

    render() {
        const { currentUser } = this.state
    return (
        <View style={styles.container}>
            <Text>
            Welcome {currentUser && currentUser.email}!
            </Text>
            <Button 
            title='Signout'
            full
            rounded
            onPress={() => this.signOutUser()}
            />
        </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
      
  }
})