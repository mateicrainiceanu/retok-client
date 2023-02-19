import React from "react";

function Navbar(props) {

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            RoTok
          </a>
          <div className="justify-content-end">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {(props.user.isAuth)? (
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle nav-txt"
                      href="/dashboard"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ fontWeight: 100 }}
                    >
                      {props.user.username}
                    </a>
                    <ul className="dropdown-menu">
                      {props.user.role === "partner" && 
                      <React.Fragment>
                      <li>
                        <a className="dropdown-item" href="/partners">
                          Partners
                        </a>
                      </li>
                      </React.Fragment>
                      }
                      <li>
                        <a className="dropdown-item" href="/dashboard">
                          Account
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Settings
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider"/>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/logout">
                          logout
                        </a>
                      </li>
                    </ul>
                  </li> ) : (
                    <li className="nav-item">
                  <a className="nav-link nav-txt" href="/login">
                    Login
                  </a>
                </li>
                  )
                }
                <li className="nav-item">
                  <a className="nav-link nav-txt" aria-current="page" href="/">
                    Prezentare
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-txt" href="/">
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div style={{ padding: "25px", backgroundColor: "#00ABB3" }}></div>
    </React.Fragment>
  );
}

export default Navbar;
