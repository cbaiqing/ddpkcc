import React, {Component} from "react";
import {StyleSheet, Text, Image, View} from "react-native";

export default class MyNotificationsScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('../resource/ic_launcher.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={() => this.props.navigation.openDrawer()}>
                    Go to notifications
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
    },
    icon: {
        width: 24,
        height: 24,
    }
});
