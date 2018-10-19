import React,{Component} from "react";
import {StyleSheet, Text, View} from "react-native";

export default class DetailScreen extends Component {
    static navigationOptions = ({navigation})=>{
        return{
            title:navigation.getParam('title','detail'),
            headerStyle:{
                backgroundColor:'#f451le'
            }
        }
    };
    render() {
        const {navigation} = this.props;
        const goodsId = navigation.getParam('goodsId');
        return (
            <View style={styles.container}>
                <Text onPress={()=>{
                    this.props.navigation.push('Detail')
                }}>Detail</Text>
                <Text>参数：{goodsId}</Text>
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
