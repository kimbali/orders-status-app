import React, { useEffect, useState, useContext } from "react";
import context from "context/OrdersContext";
import { Link } from "wouter";
import { getOrderStatus, getOrderArticles } from "service";
import { PAGES } from "config";
import TitleAndValue from "components/titleAndValue";

function OrdersListItem({ item }) {
  const { orderNo, street, zip_code, city, tracking_number, articles } = item;
  const [currentStatus, setCurrentStatus] = useState("");
  const { updateExistingOrder } = useContext(context);

  useEffect(() => {
    getOrderStatus(tracking_number).then((res) => {
      setCurrentStatus(res.status_text);
      updateExistingOrder(tracking_number, "status", res);
    });
  }, []);

  const addArticles = () => {
    if (articles) return null;
    getOrderArticles(tracking_number).then((res) => {
      updateExistingOrder(tracking_number, "articles", res);
    });
  };

  return (
    <li className="card orders-list-item">
      <Link
        to={`${PAGES.ORDER_VIEW}/${tracking_number}`}
        className="orders-list-item-container"
        onClick={addArticles}
      >
        <div className="orders-list-item-left">
          <TitleAndValue title="Order Number">{orderNo}</TitleAndValue>
          <TitleAndValue title="Delivery Address">
            {street}
            <span>
              {zip_code} {city}
            </span>
          </TitleAndValue>
        </div>
        <TitleAndValue title="Current Status">{currentStatus}</TitleAndValue>
      </Link>
    </li>
  );
}

export default React.memo(OrdersListItem);
