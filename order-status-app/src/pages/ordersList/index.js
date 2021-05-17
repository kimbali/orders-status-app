import React, { useContext } from "react";
import OrdersContext from "../../context/OrdersContext";
import OrdersListItem from "./OrdersListItem";

function OrdersList() {
  const { orders } = useContext(OrdersContext);

  return (
    <>
      <h1 className="card-title">Your orders</h1>
      <ul className="orders-list">
        {orders.map((element, index) => (
          <OrdersListItem item={element} key={`orders-list-item-${index}`} />
        ))}
      </ul>
    </>
  );
}

export default OrdersList;
