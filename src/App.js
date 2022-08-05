import { Routes, Route } from "react-router-dom";
import Home from "./component/routes/home/Home";
import Navigation from "./component/routes/navigation/Navigation";
import SignIn from "./component/routes/sign-in/SignIn";

const Shop = () => {
  return <h1>I am the shop page.</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
