import {CountriesActionTypes as ActionTypes} from '../types/ActionTypes';

const initalState = {
    countries: [],
    searchQuery: '',
    
};

export default function (state = initalState, action){
    switch (action.type) {
        default:
            return state;
    }
}