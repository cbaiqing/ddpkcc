import {createStackNavigator} from 'react-navigation';
import CartScreen from "../screen/CartScreen";
import {commonStyle} from "../../commonStyle";

export default createStackNavigator({
    Cart: {
        screen: CartScreen,
        navigationOptions:{
            headerTitleStyle:{flex: 1,textAlign:'center',color:commonStyle.black},
            headerStyle: {backgroundColor:commonStyle.white}
        }
    }
})
