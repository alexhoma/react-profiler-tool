import React from "react";
import { render } from "react-dom";

function SearchBox({ onChange }) {
  return <input type="text" onChange={e => onChange(e)} />;
}

function Result({ hits }) {
  if (!hits) {
    return null;
  }

  return (
    <ul>
      {hits.map(hit => (
        <li>{hit}</li>
      ))}
    </ul>
  );
}

class MiniTrovit extends React.Component {
  state = {
    hits: []
  };

  onUserSearch = e => {
    console.log("searching");
  };

  render() {
    return (
      <section>
        <h1>MiniTrovit</h1>
        <SearchBox onChange={this.onUserSearch} />
        <Result hits={this.state.hits} />
      </section>
    );
  }
}

render(<MiniTrovit />, document.getElementById("app"));
