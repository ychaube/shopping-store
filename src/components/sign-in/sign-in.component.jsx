import React, { useState } from "react";

import { auth, signInWithGoogle } from "../../configs/firebase/firebase.utils";
import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (err) {
      alert(`Unable to sign in to your account`);
      console.error("Error logging in ", err);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  return (
    <div className="sign-in">
      <div className="title">I already have an account</div>
      <span>Sign in with your email and password </span>

      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />

        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />

        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button customClass="btn--google-sign-in" onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
