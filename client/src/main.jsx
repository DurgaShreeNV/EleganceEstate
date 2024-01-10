import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { persistor, store } from './redux/store.js';
import { Provider } from 'react-redux';
//import PersistGate
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* Wrap everything inside persistor  and also we have to import persisgate and persistor*/}
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
