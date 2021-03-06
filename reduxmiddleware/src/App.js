import {createStore, compose, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
import {userReducer} from './redux/Reducers';

import {Provider} from 'react-redux';

import Users from './Users';

/* SAGA config */
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './redux/saga';

const sagaMiddleWare = createSagaMiddleWare();

let store = createStore(userReducer, 
  compose(applyMiddleware(sagaMiddleWare), 
  window.__REDUX_DEVTOOLS_EXTENSION__()));

sagaMiddleWare.run(rootSaga);

/* end SAGA Config */

// let store = createStore(userReducer, 
//     compose(applyMiddleware(thunk), 
//     window.__REDUX_DEVTOOLS_EXTENSION__()));

function App() {
  return (
    <Provider store={store}>
      <Users />
    </Provider>    
  );
}

export default App;
