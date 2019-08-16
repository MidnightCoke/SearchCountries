import * as React from 'react';
import {View, ScrollView} from 'react-native';
import {homeStyles as styles} from './styles';
import { Header, SearchInput,FabButton } from '../../components';
import CountryObject from './CountryObject';
import {fetchCountries, changeSearchQuery} from '../../actions/countries';


class Home extends React.Component{
    onSearchButtonTouched = () => {
        console.warn('WHATS UP');

        //call this action by dispatch
        fetchCountries('some query');
    };
    
    onChangeSearchQuery = (text) => {
        console.warn('bitch =' + text);
        //TODO: CALL FUNC 
        changeSearchQuery(text);
    };
    
    onFabButtonTouched = () =>{
        console.warn('fabButton has been touched');
        fetchCountries();

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
                <FabButton 
                icon='refresh' 
                onPress={this.onFabButtonTouched}
                style = {styles.fabButton}
                />
            </View>
        );
    }
}

export default Home;