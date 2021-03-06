import React, { Component } from 'react';
import { connect } from 'react-redux';

export class UserHeader extends Component {

  render() {
    const { user } = this.props;
    if(!user) return null;
    
    return (
      <div className="header">{user.name}</div>
    );
  }
}

const mapStateToProps = ({ users }, { userId }) => ({
  user: users.find(({ id }) => id === userId)
});

export default connect(mapStateToProps)(UserHeader);
