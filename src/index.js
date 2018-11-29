import React from "react";
import { render } from "react-dom";
import { search } from "./search";

function SearchBox({ onChange }) {
  return (
    <input
      type="text"
      placeholder="Search something..."
      onChange={e => onChange(e)}
    />
  );
}

function Item({ item }) {
  return <li>{item}</li>;
}

function Result({ hits }) {
  return (
    <ul>
      {hits.map((item, key) => (
        <Item key={`${key}-hit`} item={item} />
      ))}
    </ul>
  );
}

class MiniTrovit extends React.Component {
  state = {
    hits: []
  };

  onUserSearch = e => {
    const hits = search(e.target.value);
    this.setState({ hits });
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
