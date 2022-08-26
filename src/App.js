import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import { getProducts } from './components/server/data';

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="page">
      <div className="container">
        <div className="search">
          <input
            type="text"
            className="input-type"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="card-list">
          {products &&
            products
              .filter((product) => {
                if (search === '') {
                  return product;
                } else if (product.name.toLowerCase().includes(search.toLowerCase())) {
                  return product
                }
              })
              .map((product) => <ProductCard key={product.asin} product={product} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
