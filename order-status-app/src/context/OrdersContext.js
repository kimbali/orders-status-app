import React, { useState } from "react";

const Context = React.createContext({});

export function OrdersContextProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const findSameElem = (id) => (elem) => elem.tracking_number === id;
  const findDifferentElem = (id) => (elem) => elem.tracking_number !== id;

  const updateExistingOrder = (id, property, data) => {
    const position = orders.findIndex(findSameElem(id));
    const currentOrder = orders.find(findSameElem(id));
    currentOrder[property] = data;

    const restOfOrders = orders.filter(findDifferentElem(id));
    restOfOrders.splice(position, 0, currentOrder);
    setOrders(restOfOrders);
  };

  const findSame = (id) => {
    const foundOrder = orders.find(findSameElem(id));
    return foundOrder;
  };

  return (
    <Context.Provider
      value={{
        orders,
        setOrders,
        updateExistingOrder,
        findSame,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
