import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
  a{
      color: #000;
      text-decoration: none;
      margin: 5px;
      cursor: pointer;
    }
`;
export default GlobalStyle;



export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TableDetails = styled.table`
  max-width: 800px;
`;

export const Tr = styled.tr`
`;

export const ThField = styled.th`

  min-width: 100px;
  padding: 10px;
  font-size: 1.2rem;
  text-transform: capitalize;
`;

export const ThValue = styled.th`
  min-width: 100px;
  padding: 10px;
  font-weight: normal;
  font-size: 1.2rem;
`;




export const ContactContainer = styled.div`
  margin: 50px auto 0px auto;
  width: 80%;
  border-radius: 5px;
  padding: 40px;
  background-color: #cfe7fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 450px) {
    width: 95%;
    padding: 30px 10px;
  }
`;

export const ContacTitle = styled.h1`
  margin: 0;
`;
export const ContacSubtitle = styled.p`
  margin: 10px 0;
  font-size: 1.2rem;
  text-align: center;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #98cffa;
  padding: 40px 20px;
  border-radius: 5px;
  margin-top: 10px;
  gap: 20px;
  width: 100%;
  max-width: 500px;
  @media (max-width: 450px) {
    padding: 30px 0px;
  }
`;

export const InputContainer = styled.div`
  width: 90%;
  padding: 0;
  margin: 0;
`;

export const ContactInput = styled.input`
  font-size: 1.2rem;
  border: none;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
`;
export const BtnSubmit = styled.button`
  margin-top: 10px;
  background-color: rgb(0, 89, 173);
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  border: none;
  padding: 10px 35px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgb(0, 114, 221);
  }
`;

export const ErrorMsg = styled.p`
  margin: 0;
  color: #d90000;
`;