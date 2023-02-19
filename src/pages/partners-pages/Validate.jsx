import React, { useState } from "react";

function Validate(props) {
  const [orderData, setOrderData] = useState({id: props.ordeId, userId:props.userId, reward: 0});

  function handleChange(e) {

    setOrderData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function buttonPressed(e) {
    fetch(
      "/api/completeorder?id=" +
        props.orderId +
        "&reward=" +
        orderData.reward +
        "&userId="+
        orderData.userId
    ).then(response => response.json()).then(data =>{
        if (data.err !== "no"){
            alert(data.err)
        }
    })

    window.location.reload()
  }

  return (
    <React.Fragment>
      <div className="over">
      <link rel="stylesheet" href="/css/sign-in.css"></link>

        <main className="form-signin w-100 m-auto">
          <h1 className="h3 mb-3 fw-normal">
            Complete Order with id: {props.orderId}
          </h1>

          <div className="form-floating">
            <input
              name="reward"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={handleChange}
              value={orderData.reward}
            />
            <label htmlFor="floatingInput">Reward</label>
          </div>

          <button
            className="form-floating w-100 btn btn-lg btn-dark"
            onClick={buttonPressed}
          >
            Complete order
          </button>

        </main>
      </div>
    </React.Fragment>
  );
}

export default Validate;
