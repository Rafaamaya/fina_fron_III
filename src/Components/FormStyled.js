import styled from "styled-components";

export const Alert = styled.a`
	color:red ;
	font-size: 10px;
	text-decoration: none;
	margin: 10px 0;
`;

export const Container = styled.div`
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  width: 540px;
  max-width: 100%;
  min-height: 480px;
`;

export const FormContainer = styled.form`
  position: absolute;
  height: 100%;
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 10px;
`;
export const H1 = styled.h1`
	font-weight: bold;
  margin:0;
`;