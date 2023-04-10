import styled  from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TableDetails = styled.table`
  max-width: 800px;
  border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    display: table;
    border: 1px solid #ccc;
`;

export const Tr = styled.tr`
`;

export const ThField = styled.th`
  min-width: 100px;
  padding: 10px;
  font-size: 1.2rem;
  text-transform: capitalize;
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export const ThValue = styled.th`
  min-width: 100px;
  padding: 10px;
  font-weight: normal;
  font-size: 1.2rem;
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;
