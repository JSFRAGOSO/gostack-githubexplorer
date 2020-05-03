import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  margin-top: 80px;
  line-height: 56px;
`;
export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    max-width: 700px;
    height: 72px;
    border: 0;
    border-radius: 5px 0px 0px 5px;
    padding: 19px 34px;
    transition: background-color 0.5s;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0px;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #ff0000;
      `}
    &::placeholder {
      color: #af98b3;
    }
  }

  button {
    width: 200px;
    background: #04d361;
    border: 0;
    border-radius: 0px 5px 5px 0px;
    font-weight: bold;
    color: #fff;
    transition: background-color 0.5s;
    &:hover {
      background: ${shade(0.05, '#019761')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #ff0000;
  margin-top: 8px;
  font-weight: bold;
`;

export const RepositoryList = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    &:hover {
      transform: translateX(20px);
    }

    transition: transform 0.2s;
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;

    & + a {
      margin-top: 16px;
    }

    img {
      width: 100px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;
      max-width: 75%;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #af98b3;
        margin-top: 5px;
      }
    }
    svg {
      margin-left: auto;
      color: #af98b3;
    }
  }
`;
