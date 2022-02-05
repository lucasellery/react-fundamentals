import React, { Component, useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

class App extends Component {
  state = {
    theme: "dark",
  };

  handleToggleTheme = () => {
    this.forceUpdate();
    this.setState(prevState => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark'
    }));
  }

  render() {
    const { theme } = this.state;
    
    console.log("App render executou");

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout
          onToggleTheme={this.handleToggleTheme}
          selectedTheme={theme}
        />
      </ThemeProvider>
    )
  }
}

export default App;
