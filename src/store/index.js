import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './modules/rootReducer';

const enhancer =
    process.env.NODE_ENV === 'development'
        ? console.tron.createEnhancer()
        : compose(applyMiddleware());

const store = createStore(rootReducer, enhancer);

export default store;
