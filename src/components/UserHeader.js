import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

export class UserHeader extends Component {
  componentDidMount() {
    const { fetchUser, userId } = this.props;

    fetchUser(userId);
  }

  render() {
    const { users, userId } = this.props;
    const user = users ? users.find(({ id }) => id === userId) : null;

    if(!user) return null;
    
    return (
      <div className="header">{user.name}</div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users
});

export default connect(mapStateToProps, { fetchUser })(UserHeader);
