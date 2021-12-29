import React, { useState } from 'react';

import Post from '../Post';
import Header from '../Header';
import { Title } from './styles';
import Routes from '../Routes';
import { ThemeProvider } from '../../context/ThemeContext';

import styles from './App.scss';

function App() {
  const [posts, setPosts] = useState([
    {id: Math.random(), title: "Title#01", subtitle: 'Sub#01', likes: 230, read: false, removed: false},
    {id: Math.random(), title: "Title#02", subtitle: 'Sub#02', likes: 422, read: true, removed: false},
    {id: Math.random(), title: "Title#03", subtitle: 'Sub#03', likes: 824, read: true, removed: false},
    {id: Math.random(), title: "Title#04", subtitle: 'Sub#04', likes: 824, read: false, removed: false},
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: 50824
      },
    ]);
  }

  function handleRemovePost(postId) {
    // setPosts((prevState) => (
    //   prevState.filter(post => post.id !== postId)
    // ));
    setPosts((prevState) => prevState.map(
      post => (
        post.id === postId
          ? { ...post, removed: true }
          : post
      )
    ))
  }

  return (
    <ThemeProvider>
      <Header>
        <Title as="h2">
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </Title>
      </Header>
      
      <hr />

      <Routes />

      {posts.map(post => (
        <Post
          key={post.id}
          likes={post.likes}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeProvider>
  )
}

export default App;