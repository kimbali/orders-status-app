import React from "react";

function OrderArticleItem({ article }) {
  const { product_name, quantity, articleImageUrl, articleNo } = article;

  if (!product_name && !quantity && !articleImageUrl && !articleNo) return null;
  return (
    <li className="order-view-article">
      <p className="order-view-article-quantity">x{quantity}</p>
      <img src={articleImageUrl} alt={product_name}></img>
      <div className="order-view-article-name">
        <p>{product_name}</p>
        <small className="grey">{articleNo}</small>
      </div>
    </li>
  );
}

export default React.memo(OrderArticleItem);
