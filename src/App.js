import React from 'react';
import Post from './Post';
import Header from './Header';

function App() {
  return (
    <>
      <Header >
        <h2>Posts da semana</h2>
      </Header>
      
      <hr />

      <Post
        post={{
          title: 'React vai ser o novo framework front-end',
          subtitle: 'React vai ser o novo framework front-end'
        }}
        likes={100}
      />

      <Post
        post={{
          title: 'React vai ser o novo framework front-end',
          subtitle: 'React vai ser o novo framework front-end'
        }}
        likes={100}
      />

      <Post
        post={{
          title: 'React vai ser o novo framework front-end',
          subtitle: 'React vai ser o novo framework front-end'
        }}
        likes={100}
      />
    </>
  )
}

export default App;