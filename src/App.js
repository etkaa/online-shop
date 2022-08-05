import { Routes, Route } from "react-router-dom";
import Home from "./component/routes/home/Home";
import Navigation from "./component/routes/navigation/Navigation";
import Authentication from "./component/routes/authentication/Authentication";

const Shop = () => {
  return <h1>I am the shop page.</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
