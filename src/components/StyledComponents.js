import styled from '@emotion/styled';

export const Wrapper = styled('div')`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  padding-top: 3rem;
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
`;

export const Container = styled('div')`
  width: 60vw;
  margin: 0 auto;
  padding: 1rem;
  background-color: ${props => props.theme.highlight};
  border: 1px solid ${props => props.theme.body};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2),
    0 15px 40px rgba(0, 0, 0, 0.05);
  span {
    color: ${props => props.theme.body};
    font-size: 0.8rem;
    padding-left: 10px;
    margin-right: 1rem;
  }
  label {
    color: ${props => props.theme.body};
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  form {
    margin-top: 1rem;
  }
`;
