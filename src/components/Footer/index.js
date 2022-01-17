import React from 'react';

import { Container } from './styles';

const SUN_ICON = "https://img.icons8.com/color/48/000000/sun--v2.png"
const MOON_ICON = "https://img.icons8.com/officel/36/000000/moon.png";

export default function Footer({ onToggleTheme, selectedTheme }) {
  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button
        type="button"
        onClick={onToggleTheme}
      >
        <img src={selectedTheme === "dark" ? SUN_ICON : MOON_ICON} />
      </button>
    </Container>
  );
}