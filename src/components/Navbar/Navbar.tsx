import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <div className={style.nav}>
      <Link to="/" className={style.navlink}>
        Home
      </Link>
      <Link to="/tasks" className={style.navlink}>
        Tasks
      </Link>
      <Link to="/tasks/add" className={style.navlink}>
        Tasks
      </Link>
      <Link to="/login" className={style.navlink}>
        Login
      </Link>
      <Link to="/register" className={style.navlink}>
        Register
      </Link>
      <Link to="/summary" className={style.navlink}>
        Summary
      </Link>
    </div>
  );
};
