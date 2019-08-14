import * as React from 'react';
import {View, Text, TouchableOpacity, TouchableNativeFeedback,Platform} from 'react-native';

import { Icon } from '../../components';
import {colors} from '../../config/colors';
import {countryObjectStyles as styles} from './styles';

class CountryObject extends React.Component {
    render(){
        
        //get this information from the props;
        const countryName = 'Some Country';
        const TouchableComponent = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

        return(
            <TouchableComponent style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.countryFlag}/>
                    <Text style={styles.countryName}> {countryName} </Text>
                   
                    <Icon name='arrow' tintColor={colors.text_color} />
                </View>
            </TouchableComponent>

        );
    }
}

export default CountryObject;