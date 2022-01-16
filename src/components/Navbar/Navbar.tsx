import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
// import style from "./navbar.module.css";

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <Flex gap="1rem" justify="center">
      <Link to="/">Home</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/tasks/add">Tasks</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/summary">Summary</Link>
    </Flex>
  );
};
