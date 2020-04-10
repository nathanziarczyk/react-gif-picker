import React from "react";
import axios from "axios";

import Searchfield from "./components/searchfield/Searchfield";
import Gifs from "./components/gifs/Gifs";
import Categories from "./components/categories/Categories";
import Spinner from "./components/loading-spinner/Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: {
        loading: false,
        gifs: [],
      },
      suggestions: {
        loading: false,
        suggestions: [],
      },
      categories: {
        loading: false,
        categories: [],
      },
    };
  }

  componentDidMount() {
    if (this.state.gifs.gifs.length === 0) this.getCategories();
    // this.getSearchSuggestions(" ");
  }

  getSearchSuggestions = (string) => {
    if (string.length >= 3) {
      axios
        .get(
          `//api.tenor.com/v1/search_suggestions?key=A25V7PLBDJ0H&q=${string}`
        )
        .then((response) => {
          this.setState({
            ...this.state,
            suggestions: {
              suggestions: response.data.results,
              loading: false,
            },
          });
        })
        .catch((e) => {
          console.log("Error: " + e);
        });
    } else {
      this.setState({
        ...this.state,
        suggestions: {
          suggestions: [],
          loading: false,
        },
      });
    }
  };

  emptySearchSuggestions = () => {
    this.setState({
      ...this.state,
      suggestions: {
        loading: false,
        suggestions: [],
      },
    });
  };

  searchGif = (searchTerm) => {
    this.setState({
      ...this.state,
      gifs: {
        ...this.state.gifs,
        gifs: [],
        loading: true,
      },
    });
    axios

      .get(`//api.tenor.com/v1/search?key=A25V7PLBDJ0H&q=${searchTerm}`)
      .then((response) => {
        this.setState({
          ...this.state,
          gifs: {
            gifs: response.data.results,
            loading: false,
          },
        });
      })
      .catch((e) => {
        console.log("Error: " + e);
      });
  };

  searchByCategory = (url) => {
    this.setState({
      ...this.state,
      gifs: {
        ...this.state.gifs,
        loading: true,
      },
      categories: {
        ...this.state.categories,
        categories: [],
      },
    });
    axios
      .get(url)
      .then((response) => {
        this.setState({
          ...this.state,
          gifs: {
            gifs: response.data.results,
            loading: false,
          },
        });
      })
      .catch((e) => {
        console.log("Error: " + e);
      });
  };

  getCategories() {
    this.setState({
      ...this.state,
      categories: {
        ...this.state.categories,
        loading: true,
      },
    });
    axios
      .get(`//api.tenor.com/v1/categories?key=A25V7PLBDJ0H`)
      .then((response) => {
        this.setState({
          ...this.state,
          categories: {
            categories: response.data.tags,
            loading: false,
          },
        });
      })
      .catch((e) => {
        console.log("Error: " + e);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>{process.env.REACT_APP_FOO}</h1>
        <Searchfield
          searchGif={this.searchGif}
          getSearchSuggestions={this.getSearchSuggestions}
          emptySearchSuggestions={this.emptySearchSuggestions}
          suggestions={this.state.suggestions.suggestions}
        />

        {(this.state.categories.loading && <Spinner />) ||
          (this.state.gifs.loading && <Spinner />)}

        {this.state.gifs.gifs.length !== 0 && (
          <Gifs gifs={this.state.gifs.gifs} />
        )}

        {this.state.gifs.gifs.length === 0 && !this.state.gifs.loading ? (
          <Categories
            categories={this.state.categories.categories}
            searchByCategory={this.searchByCategory}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
