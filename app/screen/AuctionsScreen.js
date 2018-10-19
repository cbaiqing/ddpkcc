import React, {Component} from 'react';
import {Platform,Image, View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList} from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';
import GoodsListScreen from '../screen/GoodsListScreen';
import {commonStyle} from "../../commonStyle";

const {width, height} = Dimensions.get('window');

export default class AuctionsScreen extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        var list = [{id:'0',uri: 'http://musicugc.qianqian.com/ugcdiy/pic/a90e3ca24127bf0d6885ecc03e629b1c.jpg', name: '选项一'},
            {id:'1',uri: 'http://musicugc.qianqian.com/ugcdiy/pic/a90e3ca24127bf0d6885ecc03e629b1c.jpg', name: '选项二'},
            {id:'2',uri: 'http://musicugc.qianqian.com/ugcdiy/pic/a90e3ca24127bf0d6885ecc03e629b1c.jpg', name: '选项三'}];
        var navigationView = (
            <View style={{flex: 1, backgroundColor: commonStyle.white}}>
                <FlatList style={styles.listStyle} data={list}
                          keyExtractor={(item)=>item.id}
                          renderItem={({item}) =>
                              <View style={styles.menuItem} onPress={()=>{
                                    this.refs.goodsList.setId(item.id)
                              }
                              }>
                                  <Image style={styles.itemIcon} source={{
                                      uri: item.uri,
                                      cache: 'force-cache'}}/>
                                  <Text style={styles.itemText}>{item.name}</Text>
                              </View>
                          }
                />
            </View>
        );
        return (
            <DrawerLayout ref='drawerLayout'
                          drawerWidth={260}
                          renderNavigationView={() => navigationView}
            >
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
    listStyle:{
        ...Platform.select({
            ios:{
                paddingTop: 30
            },
            android:{
                padding: 20
            }
        })
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 30,
        width: 200,
        marginLeft:10,
        marginTop:5
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
        marginLeft:10,
        alignSelf: 'center',
        fontSize:14,
        color: commonStyle.navTitleColor
    }
});
