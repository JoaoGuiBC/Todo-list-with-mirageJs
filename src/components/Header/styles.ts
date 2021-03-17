import styled from 'styled-components';

export const Container = styled.header`
  background: var(--purple);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 3rem 1rem 8rem;

  strong {
    font-size: 2rem;
    letter-spacing: 0.3rem;
    padding-left: 16px;
  }

  div {
    display: flex;

    button {
      background: var(--dark-purple);
      color: var(--text);
      font-size: 2rem;
      line-height: 0;
      
      border: none;
      border-right: 1px solid var(--light-gray);
      border-radius: 8px 0 0 8px;
      height: 3rem;
      width: 3rem;
      outline: none;
      transition: filter 0.4s;

      &:hover {
        filter: brightness(0.8);
      }

      &:active {
        background: #030024;
      }
    }

    input {
      background: var(--dark-purple);
      color: var(--text);
      font-size: 1rem;
      
      border: none;
      border-radius: 0 8px 8px 0;
      height: 3rem;
      padding-left: 1rem;
      flex: 1;
    }
  }

`;
