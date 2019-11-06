import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from '../src/store';

const wrapRootElement = ({ element }) => {
    const { store, persistor } = configureStore();
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {element}
            </PersistGate>
        </Provider>
    );
};

export default wrapRootElement;
