import React from "react";
import { Route } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Layout } from "../components/Layout/Layout";
import { AddTask } from "../pages/AddTask";
interface Props {}

export const AllRoutes = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <div>Home</div>
      </Route>
      <Route exact path="/tasks">
        <div>
          <AddTask />
        </div>
      </Route>
      <Route exact path="/tasks/add">
        <div>Tasks Add</div>
      </Route>
      <Route exact path="/summary">
        <div>Summary</div>
      </Route>
      <Route exact path="/login">
        <div>Login</div>
      </Route>
      <Route exact path="/register">
        <div>Register</div>
      </Route>
      <Layout />
    </div>
  );
};
