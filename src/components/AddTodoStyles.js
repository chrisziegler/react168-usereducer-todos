import styled from 'styled-components';

const Form = styled('div')`
  width: 75vw;
  max-width: 880px;
  margin: 1.5rem auto;

  vertical-align: bottom;
  .input-text {
    display: inline-block;
    margin: 0 auto;
    padding: 0.2rem 0 0.2rem 1rem;
    width: calc(100% - 84px);
    vertical-align: bottom;
    font-family: inherit;
    font-size: 1.1rem;
    font-weight: 400;

    background-color: ${props => props.theme.input};
    border: 1px solid #150702;
    border-radius: 0.3rem 0 0 0.3rem;
  }
  .input-text:focus {
    outline: none;
    box-shadow: 1px 2px 2px rgb(0, 0, 0, 0.2);
  }
  .add-button {
    font-size: 12px;
    text-decoration: none;
    color: white;
    width: 84px;
    display: inline-block;
    height: 32px;
    vertical-align: bottom;
    padding: 0.6em 1em;
    border: 0.1em solid #150702;
    border-left: none;
    border-radius: 0 0.37em 0.37em 0;
    background: #ff6126;
  }
  .add-button:hover {
    background-color: #ff9d78;
  }
  .add-button:active {
    background-color: #dc3e03;
  }
  @media (max-width: 768px) {
    width: 97vw;
  }
`;

export default Form;
