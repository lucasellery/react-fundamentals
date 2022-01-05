import React from 'react';

import { Container } from './styles';

const SUN_ICON = "https://img.icons8.com/color/48/000000/sun--v2.png"

export default function Footer() {
  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button type="button">
        <img src={SUN_ICON}/>
      </button>
    </Container>
  );
}