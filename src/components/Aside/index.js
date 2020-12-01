import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Cart } from './styles';
import Button from 'react-bootstrap/Button';
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
          <br />
          <Link to="/cart">
            <Button>Go to shopping</Button>
          </Link>
        </div>
      </Cart>
    </div>
  );
}

export default Aside;
