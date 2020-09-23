import React from "react";
import Header from "./components/Header";
import products from "./products";
import Product from "./components/Product";
import { CartProvider } from "./contexts/use-cart";
import "./App.css";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/skin-signal'>
          <CartProvider>
            <div className='app'>
              {/* header */}
              <Header />
              <Carousel />

              <main>
                <div className='row product' id='products'>
                  {/* show products here */}
                  {products.map((product, index) => (
                    <Product key={index} product={product} />
                  ))}
                </div>
              </main>
            </div>
          </CartProvider>
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}
