import styled from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #af98b3;
    transition: color 0.2s;
    &:hover {
      color: #555;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;
    flex-direction: row;

    div {
      margin-left: 40px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #af98b3;
        margin-top: 4px;
      }
    }

    img {
      width: 120px;
      border-radius: 50%;
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    li {
      display: block;
      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 16px;
        color: #af98b3;
      }

      & + li {
        margin-left: 80px;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

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
