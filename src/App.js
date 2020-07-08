import React  from 'react';
import {Home} from './container/Home';
import {User} from './container/User';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
// import { browseerHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/index';
import { rootSaga } from './sagas/sagas';
import { userSaga } from './sagas/userSaga';


const defaultState = {};
const sagaMiddlware = createSagaMiddleware();
let store = createStore(reducers, defaultState, applyMiddleware(sagaMiddlware));

sagaMiddlware.run(rootSaga);
sagaMiddlware.run(userSaga);

// export const history = syncHistoryWithStore(browseerHistory, store);

const App = () => (
<Provider store={store}>
    <Router>
    <div>
    <Route exact path='/' component={Home} />
    <Route exact path='/User' component={User} />
    </div>
    </Router>
    </Provider>
);
export default App;
