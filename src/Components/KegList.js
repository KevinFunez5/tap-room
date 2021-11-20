import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(prop) {
  return (
    <React.Fragment>
      {props.kegList.map((keg, index) => 
      <Keg
      name={keg.name}
      brand={keg.brand}
      price={keg.price}
      alcohol={keg.alcohol}
      quantity={keg.quantity}
      key={keg.id}/>
      )}
    </React.Fragment>
  )
}