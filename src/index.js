import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { AppRouter } from './components/Router/AppRouter';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReactNotifications from 'react-notifications-component';

const store = createStore(combineReducers, composeWithDevTools(
  applyMiddleware(thunk),
));

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <ReactNotifications />
        <AppRouter />
      </div>
    );
  }
}

//render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);