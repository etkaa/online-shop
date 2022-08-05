import { useState } from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

import "./SignInForm.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Incorrect password, please try again!");
      }
      if (error.code === "auth/user-not-found") {
        alert("User not found, please try again!");
      }
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password!</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <p>or</p>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
