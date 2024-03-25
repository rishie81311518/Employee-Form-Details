import Admin from "views/examples/Admin.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";

var routes = [
  {
    path: "/dashboard",
    name: "Admin Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Admin />,
    layout: "/admin",
  },{
    path: "/login",
    name: "Login",
    icon: "ni ni-tv-2 text-primary",
    component: <Login />,
    layout: "/auth",
  },


  {
    path: "/user-profile",
    name: " Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },

  
];
export default routes;
