import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import shopReducer from './reducers/shop';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  shop: shopReducer
});

const store = createStore(rootReducer, compose(
  applyMiddleware(ReduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //redux dev
));

export default store;