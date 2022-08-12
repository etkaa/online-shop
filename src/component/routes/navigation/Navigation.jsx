import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

import { selectIsCartOpen } from "../../../store/cart/cart.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";

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
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

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
