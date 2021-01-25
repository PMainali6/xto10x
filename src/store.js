import { productData, productReducers } from './reducers/reducers';

const combineReducers = reducers => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce(
        (nextState, key) => {
            nextState[key] = reducers[key] (
            state[key],
            action
            );
            return nextState;
        }, {});
    };
    };

export const initialState = {
    productReducers: productData,
};

export const reducers = combineReducers({productReducers});
