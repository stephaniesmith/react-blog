import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

export class PostList extends Component {
  componentDidMount = () => {
    this.props.fetchPostsAndUsers();
  };

  renderList() {
    const { posts } = this.props;
    if(!posts.length) return <div>No Songs!</div>;

    return posts.map(({ id, title, body, userId }) => {
      return (
        <div className="item" key={id}>
          <i className="large middle aligned icon user"/>
          <div className="content">
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
          <UserHeader userId={userId}/>
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
  fetchPostsAndUsers: PropTypes.func,
};

const mapStateToProps = ({ posts }) => ({
  posts
});

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
