import React from "react";
import { render } from "react-dom";

function SearchBox({ onChange }) {
  return (
    <input
      type="text"
      placeholder="Search something..."
      onChange={e => onChange(e)}
    />
  );
}

function Result({ hits }) {
  if (!hits) {
    return null;
  }

  return (
    <ul>
      {hits.map(hit => (
        <li key={`${hit}-hit`}>{hit}</li>
      ))}
    </ul>
  );
}

class MiniTrovit extends React.Component {
  state = {
    hits: [
      "Piso en Les Corts",
      "Piso Barcelona centro",
      "Piso en Rambla de Poblenou",
      "Casa con piscina"
    ]
  };

  onUserSearch = e => {
    console.log("searching");
  };

  render() {
    return (
      <section>
        <h1>🏠 MiniTrovit</h1>
        <SearchBox onChange={this.onUserSearch} />
        <Result hits={this.state.hits} />
      </section>
    );
  }
}

render(<MiniTrovit />, document.getElementById("app"));
