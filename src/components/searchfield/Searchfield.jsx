import React, { Component } from "react";

import Suggestions from "./../suggestions/Suggestions";

export default class Searchfield extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: {
        value: "",
        error: false,
      },
    };
  }

  handleSearchField = (e) => {
    this.props.getSearchSuggestions(e.target.value);
    this.setState({
      searchField: {
        error: false,
        value: e.target.value,
      },
    });
  };
  handleSuggestionClick = (suggestion) => {
    this.props.searchGif(suggestion);
    this.props.emptySearchSuggestions();
    this.setState({
      searchField: {
        ...this.state.Searchfield,
        value: suggestion,
      },
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.emptySearchSuggestions();
    if (this.state.searchField.value === "") {
      this.setState({
        searchField: {
          ...this.state.searchField,
          error: true,
        },
      });
    } else {
      this.props.searchGif(this.state.searchField.value);
      this.setState({
        searchField: {
          value: "",
          error: false,
        },
      });
      this.props.emptySearchSuggestions();
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder={
              this.state.searchField.error
                ? "Please give in a search term"
                : "Search GIF on Tenor"
            }
            onChange={this.handleSearchField}
            value={this.state.searchField.value}
            className={this.state.searchField.error ? "input-error" : ""}
          />
          <input type="submit" value="search" />
        </form>
        <Suggestions
          suggestions={this.props.suggestions}
          searchGif={this.handleSuggestionClick}
        />
      </>
    );
  }
}
