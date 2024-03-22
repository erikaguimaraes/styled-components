import styled from  "styled-components";

export const Container = styled.div`
  background-color: ${({ theme })=> theme.colors.orange};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.form`
  background-color: #ede9fe;
  padding: 32px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 100%;
  gap: 10px;
`;
export const Input = styled.input`
  background-color: #fdf4ff;
  padding: 10px;
  height: 42px;
  border-radius: 8px;
  font-size: 16px;
  border :none ;
`;
export const Button = styled.button`
padding: 10px;
height: 42px;
border-radius: 8px;
background-color: #3f3f46;
display: flex;
justify-content: center;
align-items: center;
border: none;
color:#fff;
font-size: 18px;

`;

