// @flow

import styled from 'styled-components';

const Section /* : object */ = styled.div`
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.32);
  margin-bottom: 1rem;
  padding: 1rem;
  text-align: left;

  @media screen and {min-width: 769px} {
    margin-right: 1rem;
    width: calc(33.333% - 2rem);
  }
`;

export default Section;
