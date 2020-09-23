import React from "react";
import { useCart } from "../contexts/use-cart";

export default function Product({ product }) {
  const { addItem, removeItem, countItemsInCart } = useCart();

  return (
    <div className='col-md-6 col-lg-4'>
      <div className='hovereffect'>
        {/* image */}
        <div className='card border-0'>
          <img
            className='card-img-top scale-on-hover'
            src={product.image_url}
            alt={product.name}
          />

          <div className='overlay'>
            <div className='overlay-content'>
              {/* product name */}
              <div className='card-body'>
                <h3 class='card-title'>{product.name}</h3>
              </div>

              {/* buttons */}
              <div className='card-footer'>
                <div className='product-buttons'>
                  {/* remove */}
                  {countItemsInCart(product.sku) > 0 ? (
                    <button
                      className='remove'
                      onClick={() => removeItem(product.sku)}
                    >
                      Remove
                    </button>
                  ) : (
                    <div />
                  )}

                  {/* add */}
                  <button className='add' onClick={() => addItem(product.sku)}>
                    Add to Cart ({countItemsInCart(product.sku)})
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
