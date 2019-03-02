import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions';

export class PostList extends Component {
  componentDidMount = () => {
    this.props.fetchPosts();
  };

  renderList() {
    const { posts } = this.props;
    if(!posts.length) return <div>No Songs!</div>;

    return posts.map(({ id, title, body }) => {
      return (
        <div className="item" key={id}>
          <i className="large middle aligned icon user"/>
          <div className="content">
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        </div>
      );
    });
  }
  
  render() {
    return (
      <div className="ui relaxed divided list">
        {this.renderList()}
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
