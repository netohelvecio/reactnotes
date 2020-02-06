import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 60%;
  margin: 20px auto;
  background: #fbfef9;
  padding: 20px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    flex: 1;

    label {
      font-size: 14px;
      font-weight: bold;
      color: #444;
      padding: 8px 0;
    }

    input {
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;

      &::placeholder {
        color: #999;
        font-size: 16px;
      }
    }

    textarea {
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 8px;
      font-size: 16px;
      resize: none;
      min-width: 400px;

      &::placeholder {
        color: #999;
        font-size: 16px;
      }
    }

    button[type='submit'] {
      background: #30cf3d;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      height: 35px;
      padding: 0 25px;
      margin-top: 10px;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background: ${darken(0.05, '#30cf3d')};
      }
    }

    button[type='button'] {
      background: #4ea5d9;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      height: 35px;
      padding: 0 25px;
      margin-top: 10px;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background: ${darken(0.05, '#4ea5d9')};
      }
    }
  }
`;
