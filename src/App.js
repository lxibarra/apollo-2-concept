import React, { Component } from 'react';
import { Header } from './components/header/Header';
import { Search } from './components/search/Search';
import { ResultGrid } from './components/result-grid/result-grid';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
                <Search />
                <ResultGrid login="lxibarra" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
