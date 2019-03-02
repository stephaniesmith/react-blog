import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions';

export class PostList extends Component {
  componentDidMount = () => {
    this.props.fetchPosts();
  };
  
  render() {
    return (
      <div>
        PostList!
      </div>
    );
  }
}

PostList.propTypes = {
  fetchPosts: PropTypes.func,
};

export default connect(null, { fetchPosts })(PostList);
