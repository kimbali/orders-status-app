import "./styles/index.scss";
import Layout from "./components/layout";
import OrderView from "./pages/orderView";
import OrdersList from "./pages/ordersList";
import LoginForm from "./pages/loginForm";
import { Redirect, Route, Switch, useLocation } from "wouter";
import { OrdersContextProvider } from "./context/OrdersContext";
import React, { useEffect } from "react";
import { PAGES } from "config";

function App() {
  const [, setLocation] = useLocation();
  useEffect(() => {
    setLocation(PAGES.LOGIN_FORM)
  }, [])
  
  return (
    <Layout>
      <OrdersContextProvider>
        <Switch>
          <Route path={PAGES.LOGIN_FORM} component={LoginForm}/>
          <Route path={PAGES.ORDERS_LIST} component={OrdersList} />
          <Route path={`${PAGES.ORDER_VIEW}/:id`} component={OrderView} />
          <Redirect to={PAGES.LOGIN_FORM} />
        </Switch>
      </OrdersContextProvider>
    </Layout>
  );
}

export default App;
