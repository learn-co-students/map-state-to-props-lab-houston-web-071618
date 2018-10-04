import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        User count: {this.props.userCount}
        <ul>
          {this.props.users.map(user => {
            return <li key={user.username}>
              <p>username: {user.username}</p>
              <p>hometown: {user.hometown}</p>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
