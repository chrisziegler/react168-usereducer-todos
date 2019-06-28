import styled from 'styled-components';

const Item = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-wrap: no-wrap;
  width: 75vw;
  max-width: 880px;
  margin: 0 auto;
  padding: 1rem;
  background-color: ${props => props.theme.background};
  box-shadow: ${props => props.theme.shadow};
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
  margin-top: 0.5rem;
  span {
    color: ${props => props.theme.body};
    font-size: 0.8rem;
    padding-left: 10px;
    margin-right: 1rem;
  }
  label {
    color: ${props => props.theme.body};
  }
  label > input {
    margin-right: 8px;
  }
  button {
    height: 15px;
    width: 15px;
    padding: 0;
    border: 1px solid #ff6126;
    background-color: white;
    font-size: 10px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 97vw;
  }
`;

export default Item;
