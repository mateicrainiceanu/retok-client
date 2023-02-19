import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashhome from "./dash-pages/Dashhome";
import Account from "./dash-pages/Account";
import CreateOrder from "./dash-pages/CreateOrder";
import Shop from "./dash-pages/Shop";

import SendTo from "./dash-pages/SendTo";

function Dashboard(props) {

  if (props.user.isAuth) {
    if (props.user.role === "partner"){
      window.location.replace('/partners')
      return
    }
    return (
        <Routes>
            <Route path="" element={<Dashhome user={props.user}/>}/>
            <Route path="/account" element={<Account user={props.user}/>}/>
            <Route path="/order" element={<CreateOrder user={props.user} />}/>
            <Route path="/shop" element={<Shop/>}/>

            <Route path='*' element={<SendTo location="/dashboard"/>}/>

        </Routes>
        
    );
  } else {
    window.location.replace("/login");
  }
}

export default Dashboard;
