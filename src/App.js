import React, { Component } from 'react';
import { Header } from './components/header/Header';
import { Search } from './components/search/Search';
import { ResultGrid } from './components/result-grid/result-grid';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const SEARCH = gql`
  {
    search @client
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
                <Search />
                <Query query={SEARCH}>
                  {
                    ({data, client}) => (
                      <ResultGrid  login={data.search}/>
                    )
                  }
                </Query>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
