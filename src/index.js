import React from "react";
import { render } from "react-dom";

const SearchBox = onChange => {
  return <input type="text" onChange={onChange} />;
};

const Result = hits => {
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
};

class MiniTrovit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: null
    };
  }

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
