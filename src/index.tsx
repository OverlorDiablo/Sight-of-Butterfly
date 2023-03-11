import ReactDOM from 'react-dom/client';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouterProvider } from './context/RouterContext';
import { ScrollToTop } from './components/ScrollToTop';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Router>
      <RouterProvider>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </RouterProvider>
    </Router>
  </Provider>
);
