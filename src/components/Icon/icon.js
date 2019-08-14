import * as React from 'react';
import Icons from '../../assets/Icons';
import propTypes from 'prop-types';
import {View,Text} from 'react-native';
import {colors} from '../../config/colors';

class Icon extends React.Component{
    render(){
        const { name, tintColor } = this.props;
        const TargetIcon = Icons[name];
        return(
            <TargetIcon tintColor={tintColor} {...this.props}/>
        );
    }
}

Icon.propTypes = {
    name: propTypes.string,
    tintColor: propTypes.string,
};
    Icon.defaultProps = {
        tintColor:colors.accent,
    };

export default Icon;