import React, { useState } from "react";

import { auth, createUserProfile } from "../../configs/firebase/firebase.utils";
import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

import "./sign-up.styles.scss";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({ displayName, email, password, confirmPassword });

    if (password !== confirmPassword) {
      alert("Password dont match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log({ createdUser: user });
      await createUserProfile(user, { displayName });

      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error("Error creating user ", err);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    switch (name) {
      case "displayName":
        setDisplayName(value);
        break;
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "confirmPassword":
        setConfirmPassword(value);
        break;

      default:
        break;
    }
  };

  return (
    <div className="sign-up">
      <div className="title">I don't have an account</div>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Full Name"
          required
        />
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
          handleChange={handleChange}
          label="Password"
          required
        />
        <Input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
