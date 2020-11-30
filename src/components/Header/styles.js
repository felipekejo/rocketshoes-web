import styled from 'styled-components';

export const Container = styled.header`
  margin: 50px 0;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: #fff;
    margin-bottom: 20px;
  }
`;

export const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: inline-block;

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
  }
`;
