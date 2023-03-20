import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

//root-reducer

const middleWares = [logger];

const loggerMiddleware = (store) => (next) => (action) => {
    
}

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer,undefined, composedEnhancers)



/*
recurring chained function

const curryFunc = (a) => ( b , c) =>
    a + b - c ;

    const with3 = curryFunc(3);
    const with10 = curryFunc(10);
    with10(4,7)             10 + 4 - 7 



*/
