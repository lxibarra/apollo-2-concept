import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const FETCH_GIT_LOGIN = gql`
query user ($login: String!) {
 user (user: $login) {
   name
   location
   company
   avatar_url
   followers
   followerAccounts {
     user {
       login
       name
       avatar_url
       location
     }
   }
 }
}`;

export const ResultGrid = ({ login }) => {
  if (!login) {
    return null
  }
  return <Query query={FETCH_GIT_LOGIN} variables={{login}}>
      {
        ({loading, error, data}) => {
          if (loading) { return <span>Fetching git user information!</span>; }
          if (error) { return <span>Error while fetching data</span> }
          return (
            <div className="row">
              <UserProfile
                  avatar_url={data.user.avatar_url}
                  name={data.user.name}
                  location={data.user.location}
                  company={data.user.company}
               />
               <UserFollowers followers={data.user.followerAccounts}/>
            </div>
          )
        }
      }
  </Query>
};

const UserProfile = ({avatar_url, name, location, company}) => {
  return (
    <React.Fragment>
      <div className="col-md-2">
        <img src={avatar_url} className="img-thumbnail rounded" alt=""/>
      </div>
      <div className="col-md-4">
        <h4>Profile Info</h4>
        <ul>
          <li>{name}</li>
          <li>{location}</li>
          <li>{company}</li>
        </ul>
      </div>
  </React.Fragment>
  )
}

const UserFollowers = ({followers}) => {
  const followerList = followers.map(({user}) => (
    <tr>
      <td><img src={user.avatar_url} className="img-thumbnail rounded" alt="" /></td>
      <td>{ user.login }</td>
      <td>{ user.name}</td>
      <td>{ user.location|| 'Unknown' }</td>
    </tr>
  ))
  return (
    <div className="col-md-6">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Avatar</th>
              <th scope="col">Login</th>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            {followerList}
          </tbody>
       </table>
  </div>
  )
}
