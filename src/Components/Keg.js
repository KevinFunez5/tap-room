import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return(
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h2>{props.name} - Remaining: {props.quantity}</h2>
      </div>
      <button onClick = {() => props.whenPintSold(props.id)}>Sell!</button>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired, quantity: PropTypes.number, whenKegClicked: PropTypes.func,
  id: PropTypes.string,
  whenPintSold: PropTypes.func
};

export default Keg;