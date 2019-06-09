import React from "react";
import Icon from "react-native-ionicons";
import { createBottomTabNavigator,createAppContainer } from "react-navigation";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Profile from "../Screens/Profile";
import Setting from "../Screens/Setting";
import FAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddButton from '../components/AddButton'

const size=26;
//config
const RouteConfig = {
  Home: {
    screen: Home,
    defaultNavigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="home" color={tintColor} size={size} />
      )
    })
  },
  About: {
    screen: About,
    navigationOption: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" color="#fff"
        style={{width:25}} />
      )
    })
  },
  add: {
    screen: Home,
    navigationOptions: () => ({
        tabBarButtonComponent: () => (
            <AddButton/>
        ),
    }),
},
  Profile: {
    screen: Profile,
    navigationOption: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" />
      )
    })
  },
  Setting: {
    screen: Setting,
    navigationOption: () => ({
      tabBarIcon: ({ tintColor }) => (
        <FAwesomeIcon
					name="heart"
					color="#fff"
					size={size}
				/>
      )
    })
  }

};

const BottomNavigationConfig = {
        tabBarOptions: {
            activeTintColor: 'rgb(255,255,255)', //color when tab is active
            inactiveTintColor: 'rgb(89, 102, 139)',
            style: {
              backgroundColor: 'rgb(21, 31, 53)',
            },
            showIcon:true
            
          },
};

export default createAppContainer(createBottomTabNavigator(RouteConfig, BottomNavigationConfig));

