import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { Provider as ReduxProvider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReduxProvider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </ReduxProvider>
);
