import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator({
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
}, {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
        title: 'Itáliano Résta',
        headerStyle:{
            backgroundColor: '#ffffff', // this will handle the cutOff at the top the screen
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
        },
        headerTitleStyle:{
            fontSize: 22,
            fontWeight: '800',
            textAlign: 'center',
            flex: 1, // to make a header centered to the screen
      }
    }
})

export default createAppContainer(navigator)