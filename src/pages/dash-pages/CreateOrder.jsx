import React, { useState } from "react";
import Map from "./Map";

function CreateOrder(props) {
  const [error, setError] = useState({ show: false, error: "" });

  const [orderData, setOrderData] = useState({
    userId: props.user.id,
    adress: props.user.adress,
    phone: props.user.phone,
    objectData: "",
  });

  const [map, setMap] = useState({ show: false, query: "" });

  function handleChange(e) {
    setOrderData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function locate() {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    function successCallback(position) {
      setMap({
        show: true,
        query:
          "q=" + position.coords.latitude + "," + position.coords.longitude,
      });
      setOrderData((prevData) => ({
        ...prevData,
        adress: position.coords.latitude + "," + position.coords.longitude,
      }));
    }

    function errorCallback(error) {
      console.log(error);

      setError({ show: true, error: error });
    }
  }

  function updateMap(e){
    if (e.target.value !== "")
    setMap({
        show: true,
        query:
          "q=" + e.target.value
      });
  }

  function buttonPressed() {
        
          const options = {
            method: "POST",
            body: JSON.stringify(orderData),
            headers: {
                  'Content-type': 'application/json; charset=UTF-8'
                     }
        }
        
  
        fetch("/api/neworder", options).then(response => response.json()).then(data => {
          if (data.err === "no") {
            window.location.replace("/dashboard")
          } else if (data.err === "login"){
            window.location.replace("/login")
          } else {
            setError({
              show: true,
              error: data.err.message
            });
          }
        })
  }

  return (
    <React.Fragment>
      <link rel="stylesheet" href="/css/sign-in.css"></link>

      <main className="form-signin w-100 m-auto">
        <h1 className="h3 mb-3 fw-normal">New pick-up</h1>

        <div className="form-floating">
          <input
            name="adress"
            className="form-control"
            id="floatingInput"
            placeholder="str."
            onChange={handleChange}
            onMouseOut={updateMap}
            value={orderData.adress}
          />

              <button
                className="form-floating w-100 btn btn-lg btn-light" onClick={locate} >
                Localizeaza!
              </button>
   

          <label htmlFor="floatingInput">addresa</label>
        </div>

        {map.show && <Map query={map.query} />}

        <div className="form-floating">
          <input
            name="phone"
            type="phone"
            className="form-control"
            id="floatingPassword"
            placeholder="Phone"
            onChange={handleChange}
            value={orderData.phone}
          />
          <label htmlFor="floatingPassword">Telefon</label>
        </div>

        {error.show && <p>{error.error}</p>}

        <button
          className="form-floating w-100 btn btn-lg btn-dark"
          onClick={buttonPressed}
        >
            Confirm pick-up
        </button>

      </main>
    </React.Fragment>
  );
}

export default CreateOrder;
