import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

export const Button = styled.button`
  /* background-color: #21a4c5; */
  background-color: rgb(35 76 87);
  padding: 8px;
  color: #fff;
  border-radius: 12px;
  /* box-shadow: 2px 3px 5px 0px rgba(212,19,212,1); */
  box-shadow: rgb(103 56 234) 2px 3px 5px 0px;
  border: none;
  
  :hover {
    /* background-color: #860c94; */
    background-color: #00158e;
  }
  :active {
    /* background-color: #860c94; */
    background-color: #00158e;
  }
`;