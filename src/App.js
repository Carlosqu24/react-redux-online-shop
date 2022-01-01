import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import { Header } from './components/Header';

import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Router >
          <Header />

          <div className="container">
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/cart' element={<CartPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
