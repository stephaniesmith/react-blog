import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

export class UserHeader extends Component {
  componentDidMount() {
    const { fetchUser, userId } = this.props;

    fetchUser(userId);
  }

  render() {
    
    return (
      <div>
        Hello!
      </div>
    );
  }
}

export default connect(null, { fetchUser })(UserHeader);
