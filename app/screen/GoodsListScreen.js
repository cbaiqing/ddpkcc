import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import AppStatusBar from "../AppStatusBar";

export default class GoodsListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0
        }
    }

    setId(id) {
        this.setState({
            id: id
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <AppStatusBar/>
                <Text onPress={() => this.props.navigation.openDrawer()}>
                    GoodsListScreen {this.state.id}
                </Text>
            </View>
        );
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
