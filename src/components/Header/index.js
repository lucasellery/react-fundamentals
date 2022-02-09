import React, { Component } from 'react';
import { Container } from './style';
import { ThemeContext } from '../../contexts/ThemeContext';

const SUN_ICON = "https://img.icons8.com/color/48/000000/sun--v2.png";
const MOON_ICON = "https://img.icons8.com/officel/36/000000/moon.png";
export default class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, handleToggleTheme }) => (
          <Container>
            <h1>Lucas' Blog</h1>
            <button
              type="button"
              onClick={()=>handleToggleTheme()}
            >
              <img src={theme === "dark" ? SUN_ICON : MOON_ICON} />
            </button>
          </Container>
        )}
      </ThemeContext.Consumer>
    )
  }
}

