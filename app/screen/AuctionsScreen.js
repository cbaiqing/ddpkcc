import React, {Component} from 'react';
import {Platform, Image, View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList} from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';
import GoodsListScreen from '../screen/GoodsListScreen';
import {commonStyle} from "../../commonStyle";
import {Query} from 'react-apollo';
import {PRODUCT_CATEGORIES} from '../../app/graphql/query';

const {width, height} = Dimensions.get('window');
export default class AuctionsScreen extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        //获取菜单并创建菜单项
        const Menu = () => (
            <Query query={PRODUCT_CATEGORIES}>
                {({loading, error, data}) => {
                    if (loading) return (<Text>Loading...</Text>);
                    if (error) return (<Text>Error! {error.message}</Text>);
                    return (
                        <View style={{flex: 1, backgroundColor: commonStyle.white}}>
                            <FlatList style={styles.listStyle} data={data.product_categories}
                                      keyExtractor={(item) => item.id}
                                      removeClippedSubviews={false}
                                      renderItem={({item}) =>
                                          <TouchableOpacity style={styles.menuItem} onPress={() => {
                                              this.refs.drawerLayout.closeDrawer();
                                              this.refs.goodsList.setId(item.id)
                                          }
                                          }>
                                              <Image style={styles.itemIcon} source={{
                                                  uri: item.active_icon.url,
                                                  cache: 'force-cache'
                                              }}/>
                                              <Text style={styles.itemText}>{item.name}</Text>
                                          </TouchableOpacity>
                                      }
                            />
                        </View>
                    )
                }
                }
            </Query>);
        return (
            <DrawerLayout ref='drawerLayout'
                          drawerWidth={260}
                          renderNavigationView={Menu}
            >
                {/*首页头部开始*/}
                <View style={[{
                    width: width,
                    height: 50,
                    backgroundColor: '#fff',//背景色，默认白色
                    flexDirection: 'row',//横向排
                    justifyContent: 'space-between',//主轴对齐方式
                    alignItems: 'center',//次轴对齐方式（上下居中）
                    borderBottomWidth: 0,//是否有下边框
                    borderColor: '#ccc',
                }]}>
                    <View>
                        <TouchableOpacity style={styles.navLeft} onPress={() => {
                            this.refs.drawerLayout.openDrawer();
                        }}>
                            <Image source={require('../resource/ic_side_menu.png')} style={styles.navIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <View style={styles.searchBox}>
                                <Image source={require('../resource/ic_recommend_chilindo.png')}
                                       style={styles.searchIcon}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.navRight}>
                            <Image source={require('../resource/ic_side_menu.png')} style={styles.navIcon}/>
                        </TouchableOpacity>
                    </View>
                </View>
                {/*首页头部结束*/}
                <GoodsListScreen ref='goodsList'/>
            </DrawerLayout>
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
        ...Platform.select({
            ios: {
                paddingTop: 30
            },
            android: {
                padding: 20
            }
        })
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 30,
        width: 200,
        marginLeft: 10,
        marginTop: 5
    },
    itemIcon: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        marginLeft: 20
    },
    itemText: {
        height: 30,
        width: 200,
        marginLeft: 10,
        alignSelf: 'center',
        fontSize: 14,
        color: commonStyle.navTitleColor
    }
});
