import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    const users = this.props.users.map((user, index) => (
      <li key={index}>
        {user.username} is from {user.hometown}!
      </li>
    ));
    return (
      <div>
        Number of users: {this.props.users.length}
        <br />
        Users:
        <ul>{users}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    numUsers: state.users.length
  };
};

export default connect(mapStateToProps)(Users);
