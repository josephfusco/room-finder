import React from "react";
import { withRouter } from "react-router-dom";
import getTitle from "helpers/getTitle";

const Info = withRouter(props => {
  const { pathname } = props.location;
  const title = getTitle(pathname);

  return (
    <header className="Info">
      <h1 className="page-title">{title}</h1>
    </header>
  );
});

export default Info;
