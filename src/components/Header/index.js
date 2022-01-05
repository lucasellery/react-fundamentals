import React from 'react';

import {Container} from './style';

const SUN_ICON = "https://img.icons8.com/color/48/000000/sun--v2.png";

export default function Header() {
  return (
    <Container>
      <h1>Lucas' Blog</h1>
      <button type="button">
        <img src={SUN_ICON}/>
      </button>
    </Container>
  )
}
