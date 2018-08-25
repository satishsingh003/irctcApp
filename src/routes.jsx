import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './googleLogin.jsx';
import DashboardHome from './dashboardHome.jsx';

// then our route config
const routes = [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/dashboard",
      component: DashboardHome,
    }
  ];
export default Route;