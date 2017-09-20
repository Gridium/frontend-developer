// @flow

import styled from 'styled-components';

const Header /* : object */ = styled.div`
  padding-bottom: 1rem;
  text-align: center;

  @media screen and {min-width: 769px} {
    padding-bottom: 4rem;

    h2 {
      font-size: 2rem;
    }
  }
`;

export default Header;
