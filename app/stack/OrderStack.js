import {createStackNavigator} from 'react-navigation';
import OrderScreen from "../screen/OrderScreen";
import {commonStyle} from "../../commonStyle";

export default createStackNavigator({
    Order: {
        screen: OrderScreen,
        navigationOptions:{
            headerTitleStyle:{flex: 1,textAlign:'center',color:commonStyle.black},
            headerStyle: {backgroundColor:commonStyle.white}
        }
    }
})
