import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// follow this tutorial
// https://www.apollographql.com/docs/react/essentials/get-started.html
// https://www.apollographql.com/docs/react/essentials/queries.html
// https://www.youtube.com/watch?v=jFULzAMS-jI&t=6s
export const Search = () =>(
  <div>
      <div className="form-group">
      <label htmlFor="search">Search GIT User</label>
      <input type="text"
             className="form-control"
             autoComplete="off"
             id="search"
             aria-describedby="search git user"
             placeholder="Enter git Login"
           />
      <small id="searchHelp" className="form-text text-muted">GrpahQl will fetch GIT user data</small>
    </div>
  </div>
);
