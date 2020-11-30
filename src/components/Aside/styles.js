import styled from 'styled-components';

export const Cart = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  width: 300px;

  &:hover {
    opacity: 0.7;
  }
  div.cart {
    h2 {
      color: #fff;
      margin-bottom: 20px;
      margin-left: 5px;
    }

    div.items {
      display: flex;
      align-items: center;
      span {
        margin-left: 5px;
        font-size: 12px;
        color: #999;
      }
    }
    button {
      flex: 1;
      margin-top: 20px;
      width: 150px;
    }
  }
`;
