import React from 'react';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import Todo from './components/Todo';
import rooReducer from './reducers/rootReducer';

const store = createStore(rooReducer, applyMiddleware(logger));

const App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};

export default App;