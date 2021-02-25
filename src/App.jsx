import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import { getStock } from "./services/getStock";
import ProductPage from "./components/ProductPage";
import Checkout from "./components/Checkout";

const StyledApp = styled.div`
  font-family: raleway, "Open-Sans", sans-serif;
  background-color: #e3ecfd;
  height: fit-content;
`;

const StyledMainBody = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding-top: 10px;
  height: fit-content;
`;

function App() {
  const [stock, setStock] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const stock = await getStock();
      setStock(stock);
    };
    getData();
  }, []);

  return (
    <Router>
      <StyledApp>
        <TopBar />
        <StyledMainBody>
          <Switch>
            <Route exact path="/">
              <ProductPage stock={stock} />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </StyledMainBody>
      </StyledApp>
    </Router>
  );
}

export default App;
