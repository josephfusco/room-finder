import React, { Component } from "react";
import { Nav } from "components/Nav";
import { Info } from "components/Info";
import { OfficeMap } from "components/OfficeMap";
import "./App.scss";

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    document.title = "Amazing Page";
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
