import ReactDOM from 'react-dom/client';
import { configureStore, Tuple } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import reducer from './reducer';
import App from './components/app';
import './index.scss';
import './reset.css';

const store = configureStore({
    reducer,
    middleware: () => new Tuple(thunk),
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);
