import { createAppContainer } from 'react-navigation';
import Menu from '../components/MenuComponent';
import Dishdetail from '../components/DishdetailComponent';
import Home from '../components/HomeComponent';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeNavigator from './HomeNavigator';
import MenuNavigator from './MenuNavigator';

const MainNavigator = createDrawerNavigator({
    Home: HomeNavigator,
    Menu: MenuNavigator
}, {
	contentOptions: {	
    	activeBackgroundColor: 'D1C4E9'
    }
});

export default createAppContainer(MainNavigator);