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

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bgc};
  position: relative;
  padding-bottom: 70px;
  .active > button {
    color: ${({ theme }) => theme.details};
    font-weight: bold;
  }
`;

export const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 50px;
  background-color: ${({ theme }) => theme.bgcLayout};
  height: 40px;
  position: absolute;
  bottom: 0px;
  width: 100%;
  svg {
    color: ${({ theme }) => theme.text};
    &:hover {
      color: #aaa;
    }
  }
  img {
    background-color: #fff;
    width: 180px;
    margin: 0;
    @media (max-width: 350px) {
      width: 120px;
    }
  }
`;
export const IcontContainer = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 350px) {
    gap: 5px;
  }
`;

export const H1Section = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  width: 90vw;
  height: auto;
  flex-wrap: wrap;
  margin: 20px auto 0 auto;
  a {
    &:hover {
      color: ${({ theme }) => theme.hoverLink};
    }
  }
`;

export const DentistCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 340px;
  padding: 0.5rem;
  border: 0.5px solid ${({ theme }) => theme.details};
  background-color: ${({ theme }) => theme.bgcCard};
  a {
    color: ${({ theme }) => theme.text};
  }
  p {
    color: ${({ theme }) => theme.text};
  }
`;

export const ImgCard = styled.img`
  width: 100%;
`;

export const BtnFav = styled.button`
  background-color: ${({ fav }) => (fav ? "#f7c3c3" : "#cfe7fa")};
  padding: 10px;
  border: none;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: ${({ fav }) => (fav ? "#fab6b6" : "#bde2ff")};
  }
  &:active {
    background-color: ${({ fav }) => (fav ? "#fa9393" : "#9fd3fc")};
  }
`;

export const FavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BtnRemoveAll = styled.button`
  margin-top: 40px;
  background-color: rgb(0, 89, 173);
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgb(0, 114, 221);
  }
`;
export const PFavs = styled.p`
  background-color: #cfe7fa;
  padding: 10px 0px;
  border-radius: 5px;
  width: 90%;
  max-width: 300px;
  text-align: center;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TableDetails = styled.table`
  max-width: 800px;
  margin: auto;
  gap: 20px;
  border-radius: 10px;
  border: solid 1px rgb(0, 89, 173);
  padding: 10px;
  margin-top: 30px;
`;
export const Tr = styled.tr`
  border-radius: 10px;
`;

export const ThField = styled.th`
  min-width: 100px;
  padding: 10px;
  border-radius: 10px;
  background-color: #8dcdf7;
  font-size: 1.2rem;
  text-transform: capitalize;
  @media (max-width: 350px) {
    padding: 0px;
  }
`;

export const ThValue = styled.th`
  min-width: 100px;
  padding: 10px;
  border-radius: 10px;
  font-weight: normal;
  background-color: #cfe7fa;
  font-size: 1.2rem;
  @media (max-width: 350px) {
    padding: 5px;
    font-size: 1rem;
  }
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
///
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  border-radius: 10px;
  width: 300px;
`;

export const InputContainer = styled.div`
margin-top: 10px;
`;

export const ContactInput = styled.input`
  font-size: 1rem;
  border: none;
  padding: 10px;
  border-radius: 5px;
  width: 300px;
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

export const ContainerNotFound = styled.div`
  background-color: #cfe7fa;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background-color: #98cffa;
  padding: 30px;
  border-radius: 5px;
  @media (max-width: 450px) {
    padding: 10px;
  }
  h1 {
    font-size: 160px;
    @media (max-width: 450px) {
      font-size: 100px;
    }
  }
  h2 {
    font-size: 50px;
    text-align: center;
    @media (max-width: 450px) {
      font-size: 30px;
    }
  }
  a {
    background-color: rgb(0, 89, 173);
    color: white;
    font-size: 20px;
    padding: 15px 30px;
    margin-top: 60px;
    border-radius: 5px;
    text-align: center;
    &:hover {
      background-color: rgb(0, 114, 221);
    }
    @media (max-width: 450px) {
      font-size: 20px;
    }
  }
`;