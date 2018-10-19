import {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default class BidScreen extends Component {
    static navigationOptions = {
        title:'Bid'
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>BidScreen</Text>
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
