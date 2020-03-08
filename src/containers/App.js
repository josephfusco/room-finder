import React, { Component } from "react";
import { Nav } from "components/Nav";
import { Info } from "components/Info";
import { OfficeMap } from "components/OfficeMap";
import { SvgDefs } from "components/SvgDefs";
import getTitle from "helpers/getTitle";

import "./App.scss";

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { pathname } = this.props.location;
    const title = getTitle(pathname) || null;

    document.title = title ? `Room Finder - ${title}` : "Room Finder";
  }

  render() {
    const params = new URLSearchParams(this.props.location.search);
    const hideNav = params.get("hideNav") === "true";
    const hideInfo = params.get("hideInfo") === "true";

    return (
      <div className="App">
        {!hideNav && <Nav />}
        <OfficeMap />
        {!hideInfo && <Info />}
        <SvgDefs />
        <div className="Overlay" />
      </div>
    );
  }
}

export default App;
