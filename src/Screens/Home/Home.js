import * as React from 'react';
import {View, ScrollView} from 'react-native';
import {homeStyles as styles} from './styles';
import { Header, SearchInput,FabButton } from '../../components';
import CountryObject from './CountryObject';
import {fetchCountries, changeSearchQuery} from '../../actions/countries';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


class Home extends React.Component{
    onSearchButtonTouched = () => {
        this.props.dispatch(fetchCountries('some query'));
    };
    
    onChangeSearchQuery = (text) => {
        this.props.dispatch(changeSearchQuery(text));
    };
    
    
    onFabButtonTouched = () =>{
        this.props.dispatch(fetchCountries());
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

Home.propTypes = {
    dispatch: PropTypes.func,
};

const stateToProps = (state) => {
    return {};
};

export default connect(stateToProps)(Home);