import React from 'react';
import { Routes, Route } from 'react-router';
import { useAppDispatch } from '@/redux/store';
import { fetchCategories } from '@/redux/slices/categories/slice';
import { fetchProducts } from '@/redux/slices/products/slice';
import { Header, Footer } from './components';
import { About, Catalog, Contacts, Documentation, Services, Products, Product } from './pages';
import './App.module.css';

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchProducts())
  }, [])

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Services />} />

        <Route path="/catalog">
          <Route index element={<Catalog />} />
          <Route path="category/:category_id">
            <Route index element={<Products />} />
            <Route path="item/:product_id" element={<Product />} />
          </Route>
        </Route>

        <Route path="/documentation" element={<Documentation />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;