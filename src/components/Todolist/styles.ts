import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem 1rem;
`;

export const Content = styled.main`
  background: var(--light-purple);
  border-radius: 8px;

  div {
    display: flex;
    align-items: center;
    margin-top: 0.35rem;
    box-shadow: 0px 16px 60px 4px rgba(0, 0, 0, 0.2);

    p {
      flex: 1;
      background: var(--dark-purple);
      color: var(--text);
      height: 3rem;
      line-height: 3rem;
      padding-left: 1rem;
    }

    &:first-child {
      margin-top: -3.25rem;

      button {
        border-radius: 8px 0 0 0;

        &:last-child {
          border-radius: 0 8px 0 0;
        }
      }
    }

    button {
      background: var(--dark-purple);
      font-size: 2rem;
      line-height: 0;
      
      border: none;
      border-right: 1px solid var(--light-gray);
      height: 3rem;
      width: 3rem;
      outline: none;
      transition: filter 0.4s;

      &:last-child {
        border: none;
        border-left: 1px solid var(--light-gray);
      }

      &:hover {
        filter: brightness(0.8);
      }

      &:active {
        background: #030024;
      }
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;

  border-radius: 0 0 8px 8px;
  background: var(--dark-purple);

  justify-content: center;
  padding: 0.5rem 0;
`;

interface ButtonProps {
  isSelected: boolean;
}

export const Button = styled.button<ButtonProps>`
  background: transparent;
  border: none;
  margin: 0 0.75rem;
  font-size: .85rem;

  color: ${(props) => props.isSelected ? 'var(--blue)' : 'var(--text)'};
  cursor: ${(props) => props.isSelected ? 'default' : 'pointer'};

  transition: filter 0.2s;

  &:hover:enabled {
    filter: ${(props) => props.isSelected ? '' : 'brightness(2)'};
  }
`;
