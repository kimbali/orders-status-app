import React, { useState, useContext } from "react";
import { useLocation } from "wouter";
import { PAGES } from "config";
import emailValidation from "utils/validateEmail";
import { getAllOrders } from "service";
import context from "context/OrdersContext";
import Arrow from "components/arrow";

function LoginForm() {
  const defaultEmail = "julian@parcellab.com";
  const [inputValue, setInputValue] = useState(defaultEmail);
  const [showForm, setShowForm] = useState(true);
  const [, pushLocation] = useLocation();
  const { setOrders } = useContext(context);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidEmail = emailValidation(inputValue);
    if (isValidEmail) {
      getAllOrders(inputValue).then((res) => {
        if (res.length > 0) {
          setOrders(res);
          pushLocation(PAGES.ORDERS_LIST);
        } else {
          setShowForm(false);
        }
      });
    }
  };

  const handleBackArrow = () => {
    setInputValue(defaultEmail);
    setShowForm(true);
  };

  return (
    <div id="login">
      {showForm ? (
        <>
          <h1 className="card-title">
            Please enter your email address to see your recent orders
          </h1>
          <form onSubmit={handleSubmit}>
            <label className="input-container">
              Email
              <input
                defaultValue={defaultEmail}
                placeholder={defaultEmail}
                onChange={handleInput}
              />
            </label>
            <button type="submit" className="card-cta">
              send
            </button>
          </form>
        </>
      ) : (
        <>
          <h1 className="card-title">Sorry</h1>
          <p>There are no orders</p>
          <Arrow handleClick={handleBackArrow} />
        </>
      )}
    </div>
  );
}

export default LoginForm;
