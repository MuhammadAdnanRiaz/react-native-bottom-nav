import React from 'react';
import {View,Text} from 'react-native';
import Icon from 'react-native-ionicons';
import FAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default Home = () =>(
    <View>
        <Text>Home</Text>
        <Icon name="home" />
        <FAwesomeIcon
					name="heart"
                    size={26}
				/>
    </View>
)