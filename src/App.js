import React, { Component, useState, useMemo, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';

import themes from './styles/themes';

class App extends Component {
  state = {
    changed: false,
  }

  componentDidMount() {
    console.log('componentDidMount: Did mount executed');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", {
      currentState: this.state,
      prevState,
      prevState
    });
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch", { error, info });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', {
      currentState: this.state,
      nextState,
      nextProps,
    });

    return true;
  }

  componentWillUnmount() {
    
  }

  render() {
    return (
      <ThemeProvider>
        <button onClick={() => this.setState({ changed: true })}>
          change state
        </button>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              {theme === 'dark' && <Layout />}
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    )
  }
}

export default App;
