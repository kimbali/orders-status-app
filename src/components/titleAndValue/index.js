import React from "react";

export default function TitleAndValue({ title, children }) {
  return (
    <div className="title-value-container">
      <p>{title}</p>
      <strong>{children}</strong>
    </div>
  );
}
