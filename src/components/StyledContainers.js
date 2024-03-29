import styled from 'styled-components';

export const Wrapper = styled('div')`
  padding-top: 2rem;
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen';
  h1,
  h2,
  h3,
  h4 {
    color: ${props => props.theme.body};
    font-size: 1.4rem;
    font-weight: 400;
    text-align: center;
  }
  @media (max-width: 768px) {
    padding-top: 0;
  }
`;

export const Header = styled('div')`
  width: 75vw;
  max-width: 880px;
  margin: 0 auto;
  padding: 1rem;
  background-image: ${props => props.theme.header};
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
  span {
    color: ${props => props.theme.body};
    font-size: 0.8rem;
    padding-left: 10px;
    margin-right: 1rem;
  }
  label {
    color: ${props => props.theme.body};
  }
  h1 {
    color: white;
    font-size: 2rem;
    padding-bottom: 1rem;
  }
  nav {
    display: flex;
    height: 30px;
  }
  @media (max-width: 768px) {
    width: 100vw;
    margin: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding-bottom: 0;
  }
`;
