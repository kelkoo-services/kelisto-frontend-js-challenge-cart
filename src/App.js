import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Shopfront from './screens/Shopfront';
import Cart from './screens/Cart';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col items-center flex-1 w-full">
          <Switch>
            <Route exact path="/" component={Shopfront} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
