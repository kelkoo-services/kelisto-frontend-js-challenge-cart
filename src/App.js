import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Shopfront from './screens/Shopfront';
import Basket from './screens/Basket';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col items-center w-full h-screen">
          <Switch>
            <Route exact path="/" component={Shopfront} />
            <Route path="/basket" component={Basket} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
