import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import { store, persistor } from '../redux/store';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import { isTablet } from 'react-native-device-info';
import Feed from '../screens/Feed';
import UserAccount from '../screens/UserAccount';
import PostReview from '../screens/PostReview';
import BackButton from '../components/navigation/BackButton';


const MainStack = createStackNavigator({
    Feed: { screen: Feed},
    UserAccount: { screen: UserAccount},
    PostReview: {screen: PostReview}
},{
    defaultNavigationOptions:{
        headerStyle:{
            borderBottomWidth:0
        },
        headerBackImage: BackButton,
        headerBackTitleVisible: false
    },
    
});


let Nav = createAppContainer(MainStack);

export default class Navigator extends Component {

    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={null}
                    persistor={persistor}
                >
                   <Nav/>
                </PersistGate>

            </Provider>
        )
    }
}

const width = Dimensions.get('screen').width;
EStyleSheet.build({
    $rem: isTablet() ? width / 750 : width / 375
});