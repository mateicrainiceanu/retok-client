import React from "react";

function Map(props) {

    const link = "https://www.google.com/maps/embed/v1/place?key="+process.env.REACT_APP_GOOGLE_API_KEY+"&"+props.query

  return (
    <React.Fragment>
      <iframe
        title="map"
        width="100%"
        height="250"
        frameBorder="0"
        style={{border:0}}
        referrerPolicy="no-referrer-when-downgrade"
        src={link}
        allowFullScreen
      ></iframe>
    </React.Fragment>
  );
}

export default Map