import React, { useContext, useEffect, useRef } from "react";
import "./Cartitems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    removeFromCart
  } = useContext(ShopContext);


    const paymentsClient = useRef(null);
  
    useEffect(() => {
      if (window.google) {
        paymentsClient.current = new window.google.payments.api.PaymentsClient({
          environment: "TEST",
          paymentDataCallbacks: {
            onPaymentAuthorized: (paymentData) => {
              console.log("Payment Authorized", paymentData);
              return { transactionState: "SUCCESS" };
            },
          },
        });
      }
    }, []);
  
    const paymentRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: "CARD",
          parameters: {
            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
            allowedCardNetworks: ["VISA", "MASTERCARD"],
          },
          tokenizationSpecification: {
            type: "PAYMENT_GATEWAY",
            parameters: {
              gateway: "example",
              gatewayMerchantId: "exampleGatewayMerchantId",
            },
          },
        },
      ],
      merchantInfo: {
        merchantId: "12345678901234567890",
        merchantName: "Demo Merchant",
      },
      transactionInfo: {
        totalPriceStatus: "FINAL",
        totalPriceLabel: "Total",
        totalPrice: getTotalCartAmount().toString(),
        currencyCode: "USD",
        countryCode: "US",
      },
      shippingAddressRequired: true,
      callbackIntents: ["PAYMENT_AUTHORIZATION"],
    };
  
    const handleCheckout = async () => {
      try {
        const paymentDataRequest = Object.assign({}, paymentRequest);
        const paymentData = await paymentsClient.current.loadPaymentData(paymentDataRequest);
        console.log("Payment Success!", paymentData);
      } catch (err) {
        console.error("Payment Failed", err);
      }
    };
  
  
  return (
    <div className="cartitems">
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map(e => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitem-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>
                  {e.name}
                </p>
                <p>
                  ${e.new_price}
                </p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>
                  ${e.new_price * cartItems[e.id]}
                </p>
                <img
                  className="remove"
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>
                ${getTotalCartAmount()}
              </p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>
                ${getTotalCartAmount()}
              </h3>
            </div>
          </div>
          <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

{
  /* <div>
<div className="cartitems-format">
  <img src="" alt="" className="carticon-product" />
  <p></p>
  <p></p>
  <button className="cartitems-quantity"></button>
  <p></p>
  <img
    src={remove_icon}
    onClick={() => {
      removeFromCart;
    }}
    alt=""
  />
</div>
<hr />


</div> */
}
