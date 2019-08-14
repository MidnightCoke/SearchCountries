import * as React from 'react';
import {View, ScrollView} from 'react-native';

import { Header, SearchInput } from '../../components';
import CountryObject from './CountryObject';

class Home extends React.Component{
    onSearchButtonTouched = () => {
        console.warn('WHATS UP');
    };
    onChangeSearchQuery = (text) => {
        console.warn('bitch =' + text);
    };

    render(){
        return(
            <View style={{ flex: 1 }}>
                <ScrollView style= {{ flex: 1}}>
                    <Header />
                    <SearchInput
                        placeholder='Ülke Adı'
                        onPress={this.onSearchButtonTouched}
                        onChangeText={this.onChangeSearchQuery}
                        style= {{alignSelf: 'center'}}
                    />
                    <CountryObject />
                </ScrollView>
            </View>
        );
    }
}

export default Home;