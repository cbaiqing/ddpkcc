import {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default class ProfileScreen extends Component {
    static navigationOptions = {
        title:'Profile'
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>ProfileScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
