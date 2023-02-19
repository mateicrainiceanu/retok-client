// eslint-disable-next-line
import React, { useState, useEffect } from "react";

function Vouchers() {

    const [voucher, setVoucher] = useState({
        shop: "", 
        value: "", 
        points: "",
        code: ""
    })

    function handleChange(e) {
        setVoucher((prevData) => ({...prevData, [e.target.name]: e.target.value}))
    }

    function buttonPressed() {
        const options = {
            method: "POST",
            body: JSON.stringify(voucher),
            headers: {
                  'Content-type': 'application/json; charset=UTF-8'
                     }
        }

        fetch("/api/new-voucher", options).then(response => response.json()).then(data => {
            console.log(data);
            if (data.answ !== "ok"){
                alert("There was an error")
            } else {
                window.location.replace("/partners")
            }
        })
    }


  return (
    <React.Fragment>
      <link rel="stylesheet" href="/css/sign-in.css"></link>

      <main className="form-signin w-100 m-auto">
        <h1 className="h3 mb-3 fw-normal">
          Create a new voucher
        </h1>

        <div className="form-floating">
          <input
            name="shop"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={handleChange}
            value={voucher.shop}
          />
          <label htmlFor="floatingInput">Shop</label>
        </div>

        <div className="form-floating">
          <input
            name="value"
            className="form-control"
            id="floatingInput"
            onChange={handleChange}
            value={voucher.value}
          />
          <label htmlFor="floatingInput">Value</label>
        </div>

        <div className="form-floating">
          <input
            name="code"
            className="form-control"
            id="floatingInput"
            onChange={handleChange}
            value={voucher.code}
          />
          <label htmlFor="floatingInput">Code</label>
        </div>

        <div className="form-floating">
          <input
            name="points"
            className="form-control"
            id="floatingInput"
            onChange={handleChange}
            value={voucher.points}
          />
          <label htmlFor="floatingInput">Platform-Points</label>
        </div>

        <button
          className="form-floating w-100 btn btn-lg btn-dark"
          onClick={buttonPressed}
        >
          Complete new Voucher
        </button>
      </main>
    </React.Fragment>
  );
}

export default Vouchers;
