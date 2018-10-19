import {createStackNavigator} from 'react-navigation';
import ProfileScreen from "../screen/ProfileScreen";
import {commonStyle} from "../../commonStyle";

export default createStackNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions:{
            headerTitleStyle:{flex: 1,textAlign:'center',color:commonStyle.black},
            headerStyle: {backgroundColor:commonStyle.white}
        }
    }
})
