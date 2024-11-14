import * as React from 'react';
import { BottomNavigation, View } from 'react-native-paper';
import { Text } from 'react-native';

import styles from '../SignUp/css1';
// App Pages import
import MainPage from './MainPage';
import Profile from './Profile';
import DailyT from './DailyT';
import Community from './Community';

// BottomBar Routing
const MusicRoute = () => <MainPage />;
const AlbumsRoute = () => <Community/>;
const RecentsRoute = () => <DailyT />;
const NotificationsRoute = () => <Profile />;

const HomeApp = ({navigation}) => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'Home', title: 'Home', focusedIcon: 'home-circle', unfocusedIcon: 'home-circle-outline' },
        { key: 'Search', title: 'Search', focusedIcon: 'card-search', unfocusedIcon: 'card-search-outline' },
        { key: 'Tasks', title: 'Tasks', focusedIcon: 'note-multiple' },
        { key: 'Profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    ]);

   
    const renderScene = BottomNavigation.SceneMap({
        Home: MusicRoute,
        Search: AlbumsRoute,
        Tasks: RecentsRoute,
        Profile: NotificationsRoute,
    });

    return (
        
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            style={styles.green}
        />


    );
};

export default HomeApp;