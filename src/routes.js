import Profile from "views/examples/Profile.js";
import Admin from "views/examples/Admin.js";
import Login from "views/examples/Login.js";

var routes = [
  
  {
    path: "/dashboard",
    name: "Admin Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Admin />,
    layout: "/admin",
  },

  {
    path: "/user-profile",
    name: " Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },


  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
];
export default routes;
