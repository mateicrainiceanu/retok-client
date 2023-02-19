import React from "react";
import UserHistory from "./UserHistory";

function Dashhome(props) {
    
    return(
        <React.Fragment>
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Punctele tale</h1>
              <hr/>
              <p className="card-text" style={{fontWeight: 700}}>
                Punctaj: {props.user.points}
              </p>
              <p className="card-text">
                Cu acetse puncte poți obține un voucher la magazinul tău preferat. Sau poți să aștepți să strângi mai multe pentru premii mai mari. Uite magazinele!
              </p>
              <a href="/dashboard/shop" className="btn btn-theme">
                Primește voucher
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Vrei să recliclezi?</h1>
              <hr/>
              <p className="card-text">
                Dacă ai un aparat electronic care nu mai functionează sau pe care nu îl mai folosești, apasă pe butonul de mai jos și îl vom ridica de la tine de acasă.
              </p>
              <p className="card-text">
                Ce aștepți? 
              </p>
              <a href="/dashboard/order" className="btn btn-theme">
                Ridicare produs
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Contul meu</h1>
              <hr/>
              <p className="card-text">
                În secțiunea contul meu poți vedea datele tale personale, precum și să îți schimbi parola. Iar dacă vrei să îți ștergi contul, de aici poți să o faci, deși sperăm că îți place aplicația noastră și că nu vei pleca.
              </p>
              
              <a href="/dashboard/account" className="btn btn-theme">
                Contul meu
              </a>
            </div>
          </div>
        </div>
    </div>
    <hr/>
    <UserHistory user={props.user}/>
    
      </React.Fragment>
    )
}

export default Dashhome;