import React from "react";

function Keg(props) {
  return(
    <React.Fragment>
      <div>
        <h2>{props.name} - {props.quantity}</h2>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired, quantity: PropTypes.number
}

export default Keg;