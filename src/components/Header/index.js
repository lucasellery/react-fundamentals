import React, { Component } from 'react';

import {Container} from './style';

const SUN_ICON = "https://img.icons8.com/color/48/000000/sun--v2.png";
const MOON_ICON = "https://img.icons8.com/officel/36/000000/moon.png";

export default class Header extends Component {
  render() {
    const { onToggleTheme, selectedTheme } = this.props;
    
    return (
      <Container>
        <h1>Lucas' Blog</h1>
        <button
          type="button"
          onClick={onToggleTheme}
        >
          <img src={selectedTheme === "dark" ? SUN_ICON : MOON_ICON} />
        </button>
      </Container>
    )
  }
}

// export default function Header({ onToggleTheme, selectedTheme }) {

// }
