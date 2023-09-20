import React from 'react';
import PropTypes from "prop-types";

const InlineError = (props) => {
  return (
    <div style={{color:"#f44336"}}>
        {props.message}
    </div>
  )
}
InlineError.propTypes={
    message:PropTypes.string.isRequired
}

export default InlineError