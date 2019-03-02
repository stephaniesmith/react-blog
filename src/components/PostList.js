import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions';

export class PostList extends Component {
  componentDidMount = () => {
    this.props.fetchPosts();
  };
  
  render() {
    const { posts } = this.props;
    if(!posts.length) return <div>No Songs!</div>;

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

const mapStateToProps = ({ posts }) => ({
  posts
});

export default connect(mapStateToProps, { fetchPosts })(PostList);
