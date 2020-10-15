import { createAppContainer } from 'react-navigation';
import About from '../components/AboutComponent';
import { createStackNavigator } from 'react-navigation-stack';

const AboutNavigator = createStackNavigator({
    About: { screen: About }
  },
  {
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
  export default createAppContainer(AboutNavigator);