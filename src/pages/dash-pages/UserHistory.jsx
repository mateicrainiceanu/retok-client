import React, {useState, useEffect} from 'react';

const UserHistory = (props) => {

  const [orderHistory, setOrderHistory] = useState({err: "nodata", orders:[]})

  useEffect(() => {
    fetch("/api/userorders").then(response => response.json()).then(data => {
      setOrderHistory({orders: data.result, err: data.err})
    })
  },[])


  return (
    <section id="user-history">
      <h1>Produsele reciclate</h1>
      <p>Pentru utilizatorul {props.user.username}</p>
      <table id="order-table" className='table'>
        <thead>
            <tr>
                <th scope="col">Nr. crt.</th>
                <th scope="col">id-ul</th>
                <th scope="col">Status</th>
                <th scope="col">Punucte obținute</th>
                <th scope="col">Adresa</th>
                <th scope="col">Numarul de telefon</th>       
            </tr>
        </thead>
        <tbody>
          {orderHistory.orders.length > 0 ?
            (orderHistory.orders.map((order, i) => 
            <tr key={i}>
              <th scope="row">{i+1}</th>
              <td>{order._id}</td>
              <td>{order.completed ? "completed" : "working on it"}</td>
              <td>{order.pointsRecived}</td>
              <td>{order.adress}</td>
              <td>{order.phone}</td>

            </tr>
          ))
          : <tr><td><p>No data yet</p></td></tr>
          }
          
        </tbody>
      </table>
    </section>
    );
};

export default UserHistory;
