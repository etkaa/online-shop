import { Routes, Route } from "react-router-dom";
import Home from "./component/routes/home/Home";
import Navigation from "./component/routes/navigation/Navigation";
import Authentication from "./component/routes/authentication/Authentication";
import Shop from "./component/routes/shop/Shop";
import Checkout from "./component/routes/checkout/Checkout";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";

import { useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils.js";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
