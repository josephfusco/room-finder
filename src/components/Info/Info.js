import React from "react";
import { withRouter } from "react-router-dom";
import getTitle from "helpers/getTitle";

const Info = withRouter(props => {
  const { pathname } = props.location;
  const title = getTitle(pathname);

  return (
    <header className="Info">
      <p className="Info__SubTitle">Masonite</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="320"
        width="400"
        preserveAspectRatio="none"
        className="Info__Triangle"
      >
        <polygon points="0,0 400,0 200,300" stroke="#36e2f8" stroke-width="3" />
      </svg>
      <h1 className="Info__PageTitle">{title}</h1>
    </header>
  );
});

export default Info;
