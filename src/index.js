import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/app';
import './index.scss';
import './reset.css';

const store = configureStore({ reducer });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);

// const { isAllActive, ...left } = store.getState();
// const isAllChecked = Object.entries(left).every((el) => el[1]);
// if (isAllChecked && !isAllActive) store.dispatch({ type: 'ALL', value: true });
