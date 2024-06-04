import React, { useState } from "react";
import "./layout.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "antd";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [collapsed, setCollapsed] = useState(false);

  const userMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
  ];

  return (
    <div className="main">
      Hi
      <div
              className={`d-flex menu-item`}
              
            >
              <button onClick={() => {
                dispatch(setUser(null));
                localStorage.clear();
              }}>Logout</button>
              <i class="ri-logout-circle-line"></i>
              {!collapsed && <Link to="/login">Logout</Link>}
      </div>
    </div>
  );
};

export default Layout;
