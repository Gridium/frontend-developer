// @flow

import styled from 'styled-components';

const Feature /* : object */ = styled.div`
  padding-bottom: 1rem;
  text-align: center;

  @media screen and {min-width: 769px} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
`;

export default Feature;
