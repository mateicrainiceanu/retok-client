import React, { useState, useEffect } from "react";
import Validate from "./Validate";

function Orders(props) {
  const [orders, setOrders] = useState([]);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [validate, setValidate] = useState({show: false, orderId: "", userId:""});

  var start = 0;
  var maxStart = 0;

  useEffect(() => {
    fetchOrders(start);
    if (maxStart > 10) {
      setShowNext(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  function fetchOrders(start) {
    fetch("/api/orders?skip=" + start)
      .then((response) => response.json())
      .then((data) => {
        setOrders(data.results);
        maxStart = data.count;
      });
  }

  function handlePrev() {
    if (start < 10) {
      start -= 10;
      fetchOrders(start);
    } else if (start === 10) {
      start -= 10;
      fetchOrders(start);
      setShowPrev(false);
    } else {
      setShowPrev(false);
    }
  }

  function handleNext() {
    start += 10;
    if (start < maxStart + 9) {
      fetchOrders(start);
      setShowPrev(true);
    } else {
      setShowNext(false);
    }
  }

  function validateOrder(order) {
    console.log(order);
    setValidate({show: true, orderId: order._id, userId: order.userId})
   
  }

  return (
    <React.Fragment>
    {validate.show && <Validate orderId={validate.orderId} userId={validate.userId} setValidate={setValidate}/>}
      <div style={{ height: "10px" }} />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Adress</th>
            <th scope="col" />
            <th scope="col">Phone</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={i}>
              <td>{order.adress}</td>
              <td>
                <div className="btn-centerd centerd">
                  <a className="btn btn-dark" href={"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(order.adress)}>
                    Open
                  </a>
                </div>
              </td>
              <td>{order.phone}</td>
              <td>
                <div className="btn-centerd centerd">
                  <button
                    className="btn btn-dark"
                    onClick={() => validateOrder(order)}
                  >
                    Validate Order
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="btn-centerd centerd" style={{ padding: "2%" }}>
        <button
          name="prev"
          onClick={handlePrev}
          className="btn btn-theme btn-dark btn-centerd"
          disabled={!showPrev}
        >
          Prev
        </button>
        <button
          name="next"
          onClick={handleNext}
          className="btn btn-theme btn-dark btn-centerd"
          disabled={!showNext}
        >
          Next
        </button>
      </div>
    </React.Fragment>
  );
}

export default Orders;
