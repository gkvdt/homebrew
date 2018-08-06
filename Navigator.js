import {StackNavigator} from 'react-navigation';
import MenuScreen from './src/screens/Menu';
import WarningScreen from './src/screens/Warning';
import TestScreen from './src/screens/Test';
import HesapScreen from './src/screens/Hesap';
import SonucScreen from './src/screens/Sonuc';
import BilgiScreen from './src/screens/Bilgi';





const Router = StackNavigator({
    //Test:{screen:TestScreen},
    Warning:{screen:WarningScreen},
    Hesap:{screen:HesapScreen},
    Bilgi:{screen:BilgiScreen,
        navigationOptions: () => ({
            title: `A`,
            headerBackTitle: 'asdasd',
            headerTintColor:'#f4f4f4', //yazı rengi
            headerStyle:{backgroundColor:'#FF9900',

            }
          })
    },
    
    
    Sonuc:{screen:SonucScreen},
    Menu:{screen:MenuScreen},




});

export default Router;