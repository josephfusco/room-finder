import React from "react";
import rooms from "rooms";
import { withRouter } from "react-router-dom";

const Info = withRouter(props => {
  const { pathname } = props.location;
  const title = getTitle(pathname);

  return (
    <header className="Info">
      <h1 className="page-title">{title}</h1>
    </header>
  );
});

function getTitle(pathname) {
  const pathnameNoSlash = pathname.replace(/\/+$/, "");
  const room = rooms.filter(room => room.slug === pathnameNoSlash)[0];
  const { title } = room || "";
  return title;
}

export default Info;
