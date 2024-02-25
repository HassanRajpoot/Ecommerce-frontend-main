import { VscError } from "react-icons/vsc";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartItemCard from "../components/cart-items";
const cartItems = [
  {
    productId:"asadaas",
    photo:"https://m.media-amazon.com/images/I/71fMZDz2sEL._AC_UY218_.jpg",
    name:"Macbook",
    price:2333,
    quantity:23,
    stock:3    
  }
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18); 1
const shippingCharges = 200;
const discount = 3434
const total = subtotal + tax + shippingCharges
const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false)
  return (
    <div className="cart">
      <main>
      {cartItems.length > 0 ? (
          cartItems.map((i, idx) => (
            <CartItemCard
              key={idx}
              cartItem={i}
            />
          ))
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal: ${subtotal}</p>
        <p>Shipping Charges: ${shippingCharges}</p>
        <p>Tax: ${tax}</p>
        <p>Discount: <em> - ${discount}</em> </p>
        <p><b>Total: ${total}</b></p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ${discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}
          {cartItems.length > 0 && <Link to = "/shipping">Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart