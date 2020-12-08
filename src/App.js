import { Provider } from 'react-redux';
import store from './store/store';

import Shopfront from './screens/Shopfront';
// import Cart from './screens/Cart';

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col items-center flex-1 w-full">
        <Shopfront />
      </div>
    </Provider>
  );
}

export default App;
