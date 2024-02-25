import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";
import Home from "../pages/Home";
import NotFound from "../pages/404";
import DashboardLayout from "../layout/DashboardLayout";
import Feeds from "../pages/Dashboard/Feeds";
import Profile from "../pages/Dashboard/Profile";
import Settings from "../pages/Dashboard/Settings";





const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={'/'} element={<Home />} />
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path={routes.SIGN_UP} element={<Signup />} />
        <Route path={routes.DASHBOARD} element={<DashboardLayout />} >
            <Route index element={<Feeds />} />
            <Route path={routes.PROFILE} element={<Profile />} />
            <Route path={routes.SETTINGS} element={<Settings />} />
          </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
