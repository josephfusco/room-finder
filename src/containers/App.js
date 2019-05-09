import React, { Component } from "react";
import { Nav } from "components/Nav";
import { Info } from "components/Info";
import { OfficeMap } from "components/OfficeMap";
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
    return (
      <div className="App">
        <Info />
        <Nav />
        <OfficeMap />
      </div>
    );
  }
}

export default App;
