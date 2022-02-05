import React from 'react';

import { Container } from './style';
import Post from './Post';

import posts from './posts';

export default class PostsList extends React.Component {
  render() {
    return (
      <Container>
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            description={post.description}
          />
        ))}
      </Container>
    );
  }
}

// export default function PostsList() {
//   
// }