import React, {useState} from "react";

function Register(props) {

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })
    const [error, setError] = useState({
      show: false,
      error: ""
    })

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
        

        fetch("/api/register", options).then(response => response.json()).then(data => {
          if (data.err === "no") {
            console.log(data._doc);
            localStorage.setItem("user", JSON.stringify(data._doc))
            window.location.replace("/dashboard");

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
        <link rel="stylesheet" href="css/sign-in.css"></link>

      <main className="form-signin w-100 m-auto">
          <h1 className="h3 mb-3 fw-normal">Please register</h1>

          <div className="form-floating">
            <input
              name="username"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={handleChange}
              value={userData.email}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              name="password"
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={handleChange}
              value={userData.password}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          {error.show && <p>{error.error}</p>}

          <button className="form-floating w-100 btn btn-lg btn-dark" onClick={buttonPressed}>Register</button>
          <p className="centerd">Already have an account? <a href="/login">Sign in here</a></p>
      </main>
    </React.Fragment>
  );
}

export default Register;
