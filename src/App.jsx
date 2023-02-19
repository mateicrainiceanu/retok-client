import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Partners from "./pages/Partners";
import Logout from "./pages/Logout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const [user, setUser] = useState({isAuth: true});

  useEffect(() => {
    fetch("/api/user").then(response => response.json()).then(data => {
      if (data.err === "no"){
        setUser({...data._doc, isAuth: true})
      } else {
        setUser({isAuth: false})
      }
    })
    
  }, [])


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login setUser={setUser}/>,
    },
    {
      path: "/register",
      element: <Register setUser={setUser}/>,
    },
    {
      path: "/dashboard/*",
      element: <Dashboard user={user}/>,
    },
    {
      path: "/partners/*",
      element: <Partners user={user}/>
    },
    {
      path: "/logout",
      element: <Logout />
    }
  ]);

  return (
    <React.Fragment>
      <Navbar user={user}/>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
