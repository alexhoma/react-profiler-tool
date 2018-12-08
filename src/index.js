import React from "react";
import { Provider, connect } from "react-redux";
import { render } from "react-dom";
import store, { fetchAdsAction } from "./store";
import { highlight } from "./lib";

const SearchBox = (function SearchBox() {
  function component({ onChange }) {
    return (
      <input
        type="search"
        placeholder="Type to search..."
        onChange={e => onChange(e.target.value)}
      />
    );
  }

  function mapDispatchToProps(dispatch) {
    return {
      onChange: query => dispatch(fetchAdsAction(query))
    };
  }

  return connect(
    null,
    mapDispatchToProps
  )(component);
})();

const HighlightedTitle = (function HighlightedTitle() {
  function component({ query, title }) {
    const highlighted = highlight(query, title);
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: highlighted
        }}
      />
    );
  }

  function mapStateToProps(state) {
    return {
      query: state.query
    };
  }

  return connect(
    mapStateToProps,
    null
  )(component);
})();

function Price({ price }) {
  return <span>{price}</span>;
}

function Item({ children }) {
  return <li>{children}</li>;
}

const Result = (function Result() {
  function component({ hits }) {
    return (
      <ul>
        {hits.map((item, key) => (
          <Item key={item.id}>
            <HighlightedTitle title={item.title} />
            <Price price={item.price} />
          </Item>
        ))}
      </ul>
    );
  }

  function mapStateToProps(state) {
    return {
      hits: state.hits
    };
  }

  return connect(
    mapStateToProps,
    null
  )(component);
})();

function MiniTrovit() {
  return (
    <section>
      <h1>🏠 MiniTrovit</h1>
      <p>A lite version to search for your next life-changing home!</p>
      <SearchBox />
      <Result />
    </section>
  );
}

render(
  <Provider store={store}>
    <MiniTrovit />
  </Provider>,
  document.getElementById("app")
);
