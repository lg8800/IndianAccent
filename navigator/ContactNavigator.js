import { createAppContainer } from 'react-navigation';
import Contact from '../components/ContactComponent';
import About from '../components/AboutComponent';
import { createStackNavigator } from 'react-navigation-stack';

const ContactNavigator = createStackNavigator({
    Contact: { screen: Contact },
    About: { screen: About },
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
  export default createAppContainer(ContactNavigator);