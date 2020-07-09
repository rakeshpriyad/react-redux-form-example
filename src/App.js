import React  from 'react';
import {Home} from './container/Home';
import {User} from './container/User';
import { Provider } from 'react-redux';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
// import { browseerHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/index';
import { rootSaga } from './sagas/sagas';
import { userSaga } from './sagas/userSaga';
import MenuBar  from './component/MenuBar'
import Footer  from './component/footer'
import Header from './component/Header';
import UserTable from './container/UserTables';


const defaultState = {};
const sagaMiddlware = createSagaMiddleware();
let store = createStore(reducers, defaultState, applyMiddleware(sagaMiddlware));

sagaMiddlware.run(rootSaga);
sagaMiddlware.run(userSaga);

// export const history = syncHistoryWithStore(browseerHistory, store);

/* const App = () => (
<Provider store={store}>
    <div>
    <Router>
    <MenuBar />
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/User' component={User} />
    </Switch>
    </Router>
    </div>
    </Provider>
);
export default App; */


const App = (
    <Provider store={store}>
    <Router>
      <div>
        <Header />
        <MenuBar />
        
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/User' component={User} />
        <Route exact path='/Users' component={UserTable} />
        </Switch>
        <Footer />
      </div>
    </Router>
    </Provider>
  );

  export default App