import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
  	let users = this.props.users.map((user, index) => 
  		<li key={index}>{user.username}, from: {user.hometown}</li>
  		);
    return (
      <div>
        <ul>
          Users: {users}
        </ul>
        	Number of Users: {this.props.numUsers}
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
	return ({
		users: state.users,
		numUsers: state.users.length
	});
}

export default connect(mapStateToProps)(Users);
