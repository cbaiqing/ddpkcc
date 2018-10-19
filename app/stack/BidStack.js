import {createStackNavigator} from 'react-navigation';
import BidScreen from "../screen/BidScreen";
import {commonStyle} from "../../commonStyle";

export default createStackNavigator({
    Bid: {
        screen: BidScreen,
        navigationOptions:{
            headerTitleStyle:{flex: 1,textAlign:'center',color:commonStyle.black},
            headerStyle: {backgroundColor:commonStyle.white}
        }
    }
})
