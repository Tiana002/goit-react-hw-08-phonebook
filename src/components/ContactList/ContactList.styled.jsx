import styled from 'styled-components';

export const List = styled.ul`
  padding-left: 0;
	margin-bottom: 20px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 5px;
`;
export const Button = styled.button`
  font-size: 12px;
  padding: 5px;
  /* background-color: #0a47b7; */
  background-color: rgb(35, 76, 87);
  color: white;
  border-radius: 12px;
  /* box-shadow: 2px 3px 5px 0px rgba(212,19,212,1); */
  box-shadow: rgb(103 56 234) 2px 3px 5px 0px;
  border: none;

  :hover {
    background-color: #00158e;
  }
  :active {
    background-color: #00158e;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  margin-right: 10px;
`;




