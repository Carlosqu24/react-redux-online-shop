import './App.css';
import { ProductsGrid } from './components/ProductsGrid';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>Online shop - Redux</h2>

        <ProductsGrid />
      </div>
    </div>
  );
}

export default App;
