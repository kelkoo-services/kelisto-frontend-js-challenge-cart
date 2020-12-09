import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import productsReducer from './reducers/products';
import basketReducer from './reducers/basket';

const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer
});

const store = createStore(rootReducer, compose(
  applyMiddleware(ReduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //redux dev
));

export default store;