import React from "react";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Splash from "../pages/Splash";

interface Page {
      readonly url: string;
      readonly title: string;
      readonly component: typeof React.Component | React.FC | any;
}

export const routes: Page[] = [
      {
            title: 'Home',
            url: '/home',
            component: Splash,
      },
      {
            title: 'Login',
            url: '/login',
            component: Login,
      },
      {
            title: 'Signup',
            url: '/signup',
            component: SignUp,
      },
      {
            title: 'Dashboard',
            url: '/dashboard',
            component: Dashboard,
      },

]