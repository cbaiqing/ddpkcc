import React, {Component} from "react";
import {Dimensions, FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AppStatusBar from "../AppStatusBar";
import {commonStyle} from "../../commonStyle";
import {Query} from 'react-apollo';
import {PRODUCTS} from '../graphql/query';

const {width, height} = Dimensions.get('window');
const numColumns = 3;

export default class GoodsListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            position: 'index',
            page: {
                cursor: "",
                count: 20
            },
            refreshing: true,
            products: []
        }
    }

    setId(id) {
        this.setState({
            id: id
        })
    }
    componentDidMount(){
        this.getProducts();
    }
    refreshing() {
        let timer = setTimeout(() => {
            clearTimeout(timer);
            alert('刷新成功');
        }, 1500)
    }

    onLoad() {
        let timer = setTimeout(() => {
            clearTimeout(timer);
            alert('加载成功');
        }, 1500)
    }

    emptyView() {
        return (
            <View style={styles.container}>
                <Text style={styles.emptyText}>sorry! 暂无此类商品</Text>
            </View>
        )
    };

    async getProducts() {
        const {data} = await client.query({
            query: PRODUCTS,
            variables: {id: this.state.id, position: this.state.position, page: this.state.page}
        });
        this.onProductsFetched(data.products);
    }
    onProductsFetched = products => this.setState(() => ({ products }));
    render() {
        return (
            <View style={styles.container}>
                <AppStatusBar/>
                <View style={{flex: 1}}>
                    <FlatList numColumns={numColumns} style={styles.listStyle} data={this.state.products}
                              keyExtractor={(item) => item.id}
                              removeClippedSubviews={false}
                              onRefresh={this.refreshing}
                              refreshing={false}
                              onEndReachedThreshold={0}
                              onEndReached={
                                  this.onLoad
                              }
                              ListEmptyComponent={() => this.emptyView()}
                              renderItem={({item}) =>
                                  <TouchableOpacity style={styles.menuItem}>
                                      <Image style={styles.itemIcon} source={{
                                          uri: item.images[0].url
                                      }}/>
                                      <Text
                                          style={styles.itemText}>
                                          剩余{item.current_issue.count_down_seconds}s
                                      </Text>
                                      <Text
                                          style={styles.itemText}>
                                          {item.current_issue.max_price + item.current_issue.price_unit}
                                      </Text>
                                  </TouchableOpacity>
                              }
                    />
                </View>
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
    navLeft: {
        alignItems: 'center',
        marginLeft: 10,
    },
    navRight: {
        alignItems: 'center',
        marginRight: 10,
    },
    navIcon: {
        height: 20,
        width: 20,
    },
    navText: {
        fontSize: 10,
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.7,
        height: 40
    },
    searchIcon: {
        width: 120,
        height: 24,
        resizeMode: 'contain'
    },
    searchContent: {
        color: '#666',
        fontSize: 14,
    },
    listStyle: {
        flex: 1,
        width: width,
        paddingTop: 1
    },
    menuItem: {
        height: 180,
        width: width / numColumns,
        padding: 10,
        alignSelf: 'center',
        backgroundColor: commonStyle.white
    },
    itemIcon: {
        height: width / numColumns,
        width: width / numColumns,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    itemText: {
        height: 20,
        alignSelf: 'center',
        fontSize: 14,
        color: commonStyle.navTitleColor
    },
    emptyText: {
        paddingTop: 20
    }
});
