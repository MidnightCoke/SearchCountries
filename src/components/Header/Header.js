import * as React from 'react';
import {View, Text} from 'react-native';

import {headerStyles as styles} from './styles';

class Header extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.subtitle}>Hangi Ülkeyi Merak Ediyorsunuz ?</Text>
                <View style={styles.line}/>
                <Text style={styles.title}>Ülke</Text>
            </View>
        );
    }
}

export default Header;
