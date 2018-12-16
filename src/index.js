import React from "react";
import { render } from "react-dom";
import { search, highlight } from "./lib";

const SearchBox = React.memo(function SearchBox({ onChange }) {
  return (
    <input
      type="search"
      placeholder="Type to search..."
      onChange={e => onChange(e)}
    />
  );
});

const HighlightedTitle = React.memo(function HighlightedTitle({
  query,
  title
}) {
  const highlighted = highlight(query, title);
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: highlighted
      }}
    />
  );
});

const Price = React.memo(function Price({ price }) {
  return <span>{price}</span>;
});

const Item = React.memo(function Item({ children }) {
  return <li>{children}</li>;
});

const Result = React.memo(function Result({ query, hits }) {
  return (
    <ul>
      {hits.map((item) => (
        <Item key={item.id}>
          <HighlightedTitle query={query} title={item.title} />
          <Price price={item.price} />
        </Item>
      ))}
    </ul>
  );
});

class MiniTrovit extends React.PureComponent {
  state = {
    query: "",
    hits: []
  };

  onUserSearch = e => {
    const query = e.target.value;
    const hits = search(query);
    this.setState({ query, hits });
  };

  render() {
    return (
      <section>
        <h1>🏠 MiniTrovit</h1>
        <p>A lite version to search for your next life-changing home!</p>
        <SearchBox onChange={this.onUserSearch} />
        <Result query={this.state.query} hits={this.state.hits} />
      </section>
    );
  }
}

render(<MiniTrovit />, document.getElementById("app"));
