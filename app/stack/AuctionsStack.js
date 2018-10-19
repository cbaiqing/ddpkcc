import {createStackNavigator} from 'react-navigation';
import AuctionsScreen from "../screen/AuctionsScreen";
import {commonStyle} from "../../commonStyle";
export default createStackNavigator({
    Auctions: {
        screen:AuctionsScreen,
        navigationOptions:{
            headerTitleStyle:{flex: 1,textAlign:'center',color:commonStyle.black},
            headerStyle: {backgroundColor:commonStyle.white}
        }
    }
})
