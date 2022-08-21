import { Routes, Route } from "react-router-dom";
import Home from "./component/routes/home/Home";
import Navigation from "./component/routes/navigation/Navigation";
import Authentication from "./component/routes/authentication/Authentication";
import Shop from "./component/routes/shop/Shop";
import Checkout from "./component/routes/checkout/Checkout";
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { checkUserSession } from "./store/user/user.action";
import { GlobalStyle } from "./global.styles";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
