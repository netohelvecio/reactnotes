import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 80%;
  margin: 20px auto;

  header {
    display: flex;
    justify-content: flex-end;

    button {
      background: #4ea5d9;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      height: 35px;
      padding: 0 25px;

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin-right: 8px;
      }

      &:hover {
        background: ${darken(0.05, '#4EA5D9')};
      }
    }
  }

  > div {
    background: #fbfef9;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    border-radius: 4px;
    padding: 20px;

    span {
      font-size: 20px;
      color: #333;
    }
  }

  ul {
    background: #fbfef9;
    padding: 20px;
    border-radius: 4px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    margin-top: 10px;
  }
`;

export const Note = styled.li`
  padding: 14px 20px;
  border-radius: 8px;
  background: #bfdbf7;

  span {
    font-size: 18px;
    color: #333;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    color: #555;
    line-height: 18px;
    margin-top: 6px;
  }

  div {
    margin-top: 8px;

    display: flex;
    justify-content: flex-end;

    button {
      background: none;
      border: 0;

      & + button {
        margin-left: 10px;
      }
    }
  }
`;
