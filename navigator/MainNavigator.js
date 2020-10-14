import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeNavigator from './HomeNavigator';
import MenuNavigator from './MenuNavigator';

const MainNavigator = createDrawerNavigator({
    Home: HomeNavigator,
    Menu: MenuNavigator
}, {	
    	drawerBackgroundColor: '#D1C4E9'
});

export default createAppContainer(MainNavigator);