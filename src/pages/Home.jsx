import React from "react";



function Home() {

    return (
        <React.Fragment>
            <section id="presentation">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <img className="fit-image card-img" src="images/dee.jpg" alt="electrocasnice"/>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card fit-image">
                <div className="card-body">
                  <h1 className="card-title">RoTok</h1>
                  <p className="card-text">Este o platformă care permite utilizatorilor să primească în schimbul reciclării produselor electrice, electronice, electrocasnice vouchere la partenerii noștri.</p>
                  <p className="card-text">Momentan acest produs este în etapa de testare, deci codurile-voucher eliberate de această aplicație sunt doar pentru testare.</p>
                  <p className="card-text">Datele stocate nu sunt/vor fi folosite cu scop publictar.</p>
                  <a href="/register" className="btn btn-theme">Incearca acum!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="avantaje">
        <h3>De ce să reciclezi?</h3>
        <p>Sunt zeci de motive pentru care ai vrea să reciclezi. Pentru o planetă mai curată sau ca să eliberezi loc în casă. Important este că dacă reciclezi totă lumea câștigă.</p>

        <h3>Care este scopul nostru?</h3>
        <p>Noi încercăm să încurajăm oamenii să recicleze, răsplătindu-i pe aceștia. Pentru noi este importat să avem o planetă curată și oamenii să fie încurajați să recilceze.</p>

        <h3>Cum funcționează apilcația noastă?</h3>
        <ol>
          <li>Dvs. faceți o comandă pentru a recilca un deșeu.</li>
          <li>Comanda vă este ridicată. Apoi va fi verificată și vi se va acorda un număr de puncte în aplicația noastră.</li>
          <li>Din punctele dvs veți putea alege vouchere la magazinele favorite din secțiunea partenerii noștrii.</li>
        </ol>
      </section>

      <section id="steps">

        <h1>Cum să folosești aplicația?</h1>

        <div className="row">

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">Creează un cont nou</h1>
                <p className="card-text">Pentru a folosi aplicația noastă, trebuie să aveți un cont. Vă asigurăm ca datele dvs nu vor fi folosite în scopuri publicitare.</p>
                <a href="/register" className="btn btn-theme">Crează un cont</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">Plasează o comandă</h1>
                <p className="card-text">Este gratuit! După ce vei face comanda, unul din paternerii noștri va perlua aparatul sticat de la tine de acasă în câteva zile.</p>
                <a href="/login" className="btn btn-theme">Fă o comandă</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">Revedică un voucher</h1>
                <p className="card-text">Dacă ați primit punctele pe ultima ta comandă, puteți să vă preschimbați acele puncte in vouchere la magazinele partenere.</p>
                <a href="/dashboard" className="btn btn-theme">Primește voucher</a>
              </div>
            </div>
          </div>
          
        </div>

      </section>

      <section id="partners">
        <h1>Partenerii noștri</h1>
        <p>*DISCLAIMER: Nici unul dintre aceste magazine nu este partener. Acesta e un produs demo.</p>

        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active"><img className="d-block w-100" src="partners/abtyou.png" alt="abtyou"/></div>
            <div className="carousel-item"><img className="d-block w-100" src="partners/altex.png" alt="altex"/></div>
            <div className="carousel-item"><img className="d-block w-100" src="partners/carturesti.jpeg" alt="carturesti"/></div>
            <div className="carousel-item"><img className="d-block w-100" src="partners/emag.jpeg" alt="emag"/></div>
            <div className="carousel-item"><img className="d-block w-100" src="partners/istyle.png" alt="istyle"/></div>
            <div className="carousel-item"><img className="d-block w-100" src="partners/teds.png" alt="teds"/></div>
          </div>
        </div>

      </section>
        </React.Fragment>
    )
}

export default Home;