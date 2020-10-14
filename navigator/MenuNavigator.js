import { createAppContainer } from 'react-navigation';
import Menu from '../components/MenuComponent';
import Dishdetail from '../components/DishdetailComponent';
import Home from '../components/HomeComponent';
import { createStackNavigator } from 'react-navigation-stack';

const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu },
  Dishdetail: { screen: Dishdetail }
},
{
  initialRouteName: 'Menu',
  defaultNavigationOptions: {
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          color: "#fff"            
      }
  }
}
);
export default createAppContainer(MenuNavigator);