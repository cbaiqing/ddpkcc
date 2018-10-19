import {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default class OrderScreen extends Component {
    static navigationOptions = {
        title:'Order'
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>OrderScreen</Text>
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
