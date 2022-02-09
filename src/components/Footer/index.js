import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Container } from './styles';

const SUN_ICON = "https://img.icons8.com/color/48/000000/sun--v2.png"
const MOON_ICON = "https://img.icons8.com/officel/36/000000/moon.png";

export default function Footer() {
  const { theme, handleToggleTheme} = useContext(ThemeContext);
  
  return (
    <Container>
      <ThemeContext.Consumer>
        {value => console.log('funcional', value)}
      </ThemeContext.Consumer>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button
        type="button"
        onClick={handleToggleTheme}
      >
        <img src={theme === "dark" ? SUN_ICON : MOON_ICON} />
      </button>
    </Container>
  );
}
