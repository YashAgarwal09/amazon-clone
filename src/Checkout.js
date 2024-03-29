import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title">Your shopping basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/* basket */}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
        <h2 className="checkout_title">Subtotal</h2>

        {/* CheckoutProduct */}
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
      </div>
    </div>
  );
};

export default Checkout;
