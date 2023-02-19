import React from "react";
import Orders from "./partners-pages/Orders";
import { Routes, Route } from 'react-router-dom';
import Vouchers from "./partners-pages/Vouchers";
import AllVouchers from "./partners-pages/AllVouchers";

function Partners (props) {
    
    if (props.user.isAuth) {

        if (props.user.role === "partner"){
            return (
                <Routes>
                    <Route path="/" element={
                        <React.Fragment>
                          <h1 className="partner-button">Hi Partner</h1>
                          <a className="btn btn-dark btn-lg partner-button" href="/partners/orders">See orders</a>
                          <a className="btn btn-dark btn-lg partner-button" href="/partners/vouchers/new">New Voucher</a>
                          <a className="btn btn-dark btn-lg partner-button" href="/partners/vouchers/all">Vouchers</a>

                        </React.Fragment>
                    } />
                    <Route path="/orders" element={<Orders />}/>
                    <Route path="/vouchers/new" element={<Vouchers />}/>
                    <Route path="/vouchers/all" element={<AllVouchers />}/>
                </Routes>
            )
        } else {            
            return(
                <h1>Din pacate, nu esti un partener. Daca doresti sa fii un partener, contacteaza echipa de suport.</h1>
            );
    }
    } else {
        window.location.replace('/login')
    }
}

export default Partners;