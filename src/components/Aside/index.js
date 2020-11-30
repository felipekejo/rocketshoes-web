import React from 'react';
import { useSelector } from 'react-redux';

import { Cart } from './styles';

import { formatPrice } from '../../util/format';

function Aside() {
  const cartSize = useSelector((state) => state.cart.length);
  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );
  return (
    <div>
      <Cart to="/cart">
        <div className="cart">
          <h2>Purchases</h2>
          <div className="items">
            <span>{cartSize} items</span>
            <span>Cart sub-total {total}</span>
          </div>
          <button type="button" to="/cart">
            Go To Checkout
          </button>
        </div>
      </Cart>
    </div>
  );
}

export default Aside;
