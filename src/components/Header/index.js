import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

import styled from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';

const Title = styled.h1`
  color: #637BF3;
`;

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <Title>{props.title}</Title>
      <Button onClick={onToggleTheme}>
        Mudar tema
      </Button>
      {props.children}
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

Header.defaultProps = {
  title: "LukeStack's blog",
}