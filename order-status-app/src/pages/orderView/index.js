import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "wouter";
import context from "context/OrdersContext";
import TitleAndValue from "components/titleAndValue";
import OrderArticleItem from "./OrderArticleItem";
import Arrow from "components/arrow";
import { PAGES } from "config";

function OrderView({ params }) {
  const { orders, findSame } = useContext(context);
  const [, pushLocation] = useLocation();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const currentOrder = findSame(params.id);
    setOrderDetails(currentOrder);
  }, [orders, params, findSame]);

  const handleBackClick = () => {
    pushLocation(PAGES.ORDERS_LIST);
  };

  const articlesHasContent = () => {
    let hasContent = false;
    if (articles && articles.length > 0) {
      articles.forEach((element) => {
        hasContent = !!Object.values(element).join("");
      });
    }
    return hasContent;
  };

  if (!orderDetails) return null;
  const { orderNo, street, zip_code, city, tracking_number, articles, status } =
    orderDetails;
  return (
    <div className="order-view">
      <Arrow handleClick={handleBackClick} />
      <TitleAndValue title="order number">{orderNo}</TitleAndValue>
      <TitleAndValue title="Delivery Address">
        {street}
        <span>
          {zip_code} {city}
        </span>
      </TitleAndValue>
      <div className="card">
        <TitleAndValue title="traking number">{tracking_number}</TitleAndValue>
        {status && (
          <TitleAndValue title="current status">
            {status.status_text}
            <small>{status.status_details}</small>
          </TitleAndValue>
        )}
      </div>
      {articlesHasContent() && (
        <div className="card">
          <TitleAndValue title="articles">
            <ul className="order-view-articles-list">
              {articles.map((elem, index) => (
                <OrderArticleItem
                  article={elem}
                  key={`order-article${index}`}
                />
              ))}
            </ul>
          </TitleAndValue>
        </div>
      )}
    </div>
  );
}

export default React.memo(OrderView);
