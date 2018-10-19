/**主界面*/
import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import AuctionsStack from './stack/AuctionsStack';
import BidStack from './stack/BidStack';
import CartStack from './stack/CartStack';
import OrderStack from './stack/OrderStack';
import ProfileStack from './stack/ProfileStack';
import {commonStyle} from "../commonStyle";

const IconAuction = require('./resource/ic_nav_home_inactive.png');
const IconBid = require('./resource/ic_nav_mybid_inactive.png');
const IconCart = require('./resource/ic_nav_cart_inactive.png');
const IconOrder = require('./resource/ic_nav_order_inactive.png');
const IconProfile = require('./resource/ic_nav_profile_inactive.png');
/**
 * 创建底部导航栏
 */
export default createBottomTabNavigator({
    Auctions: {
        screen: AuctionsStack,
        navigationOptions: {
            tabBarLabel: `Auctions`,
            tabBarIcon: ({tintColor}) => (
                <Image source={IconAuction}
                       style={{tintColor: tintColor, width: 24, height: 24}}/>
            )
        }
    },
    Bid: {
        screen: BidStack,
        navigationOptions: {
            title: `Bid`,
            tabBarIcon: ({tintColor}) => (
                <Image source={IconBid}
                       style={{tintColor: tintColor, width: 24, height: 24}}/>
            )
        }
    },
    Cart: {
        screen: CartStack,
        navigationOptions: {
            title: `Cart`,
            tabBarIcon: ({tintColor}) => (
                <Image source={IconCart}
                       style={{tintColor: tintColor, width: 24, height: 24}}/>
            )
        }
    },
    Order: {
        screen: OrderStack,
        navigationOptions: {
            title: `Order`,
            tabBarIcon: ({tintColor}) => (
                <Image source={IconOrder}
                       style={{tintColor: tintColor, width: 24, height: 24}}/>
            )
        }
    },
    Profile: {
        screen: ProfileStack,
        navigationOptions: {
            title: `Profile`,
            tabBarIcon: ({tintColor}) => (
                <Image source={IconProfile}
                       style={{tintColor: tintColor, width: 24, height: 24}}/>
            )
        }
    }
}, {
    initialRouteName: 'Auctions',
    tabBarOptions: {
        activeTintColor: commonStyle.themeColor
    }
})
