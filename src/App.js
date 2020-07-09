import React  from 'react';
import {Home} from './container/Home';
import {User} from './container/User';
import { Provider } from 'react-redux';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
//import { createStore, applyMiddleware } from 'redux';
// import { browseerHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import { rootSaga } from './sagas/sagas';
import { userSaga } from './sagas/userSaga';
import { loadUserSaga } from './sagas/loadUserSaga';
import { myUsersSaga } from './sagas/myusers-saga';
import MenuBar  from './component/MenuBar'
import Footer  from './component/footer'
import Header from './component/Header';
import UsersWithReduxSaga from './component/UsersWithReduxSaga';
import UserTable from './container/UserTables';
import { applyMiddleware, compose, createStore } from 'redux';
import {configureStore} from "./store/configureStore";

const store = configureStore();

/*const defaultState = {};
const sagaMiddlware = createSagaMiddleware();
let store = createStore(reducers, defaultState, applyMiddleware(sagaMiddlware));

sagaMiddlware.run(rootSaga);
sagaMiddlware.run(userSaga);
sagaMiddlware.run(loadUserSaga);

*/
/* const initialState = {
  
}; */



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
        <Route exact path='/UsersLoad' component={UsersWithReduxSaga} />
        </Switch>
        <Footer />
      </div>
    </Router>
    </Provider>
  );

  export default App