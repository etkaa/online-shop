import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import { UserContext } from "../../../contexts/User.context";
import { CartContext } from "../../../contexts/Cart.context";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { signOutUser } from "../../../utils/firebase/firebase.utils";

import CartIcon from "../../cart-icon/CartIcon";
import CartDropdown from "../../cart-dropdown/CartDropdown";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./Navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              LOG OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
