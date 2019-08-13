
import * as React from 'react';
import {Svg, Path } from 'react-native-svg';

export default props => (
    <Svg viewBox='0 0 24 24' height='24' width='24' {...props}>
        <Path
            d=''
            fill={props.tintColor || '#fff'}
        />
    </Svg>
)
    
