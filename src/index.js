import ReactDOM from 'react-dom/client';
import { configureStore, Tuple } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import reducer from './reducer';
import App from './components/app';
import './index.scss';
import './reset.css';

const logger = (store) => (next) => (action) => {
    const result = next(action);
    console.log('Middle', ...store.getState().cards);
    return result;
};

const store = configureStore({ reducer, middleware: () => new Tuple(logger, thunk) });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);
