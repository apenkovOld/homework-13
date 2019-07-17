import React from "react";
import ReactDOM from "react-dom";

const withPortal = DOMelement => Component => () =>
  ReactDOM.createPortal(<Component />, DOMelement);

export default withPortal;
