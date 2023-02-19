import React, {useState, useEffect} from "react";

function Account(props) {

    const [userData, setUserData] = useState(props.user);
    const [error, setError] = useState({
        show: false
    })

    useEffect(()=>{
        setUserData(props.user);

    }, [props.user])

    function handleChange(e){
        setUserData((prevData) => ({...prevData, [e.target.name]: e.target.value}))
    }

    function buttonPressed() {
        //Acsess (userData)
        
          const options = {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                  'Content-type': 'application/json; charset=UTF-8'
                }
        }

        fetch("/api/updateuser", options).then(response => response.json()).then(data => {
            console.log(data);
            if (data.err === "no") {
                window.location.replace("/dashboard");
            } else {
                console.log(data.err);
              setError({
                show: true,
                error: "there was an error"
              });
            }
          })
    }
    

  return (
    <React.Fragment>
      <link rel="stylesheet" href="/css/sign-in.css"></link>

      <main className="form-signin w-100 m-auto">
        <h1 className="h3 mb-3 fw-normal">Edit your info</h1>

        <div className="form-floating">
          <input
            name="username"
            className="form-control"
            id="floatingInput"
            onChange={handleChange}
            value={userData.username}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            name="name"
            type="text"
            className="form-control"
            id="floatingPassword"
            onChange={handleChange}
            value={userData.name}
          />
          <label htmlFor="floatingPassword">Name</label>
        </div>

        <div className="form-floating">
          <input
            name="phone"
            type="text"
            className="form-control"
            id="floatingPassword"
            onChange={handleChange}
            value={userData.phone}
          />
          <label htmlFor="floatingPassword">Phone</label>
        </div>

        <div className="form-floating">
          <input
            name="adress"
            type="text"
            className="form-control"
            id="floatingPassword"
            onChange={handleChange}
            value={userData.adress}
          />
          <label htmlFor="floatingPassword">Adress</label>
        </div>

        <button
          className="form-floating w-100 btn btn-lg btn-dark"
          onClick={buttonPressed}
        >
          Submit Changes
        </button>
        <p className="centerd">
          {error.error}
        </p>
      </main>
    </React.Fragment>
  );
}

export default Account;
