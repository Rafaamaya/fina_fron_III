import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailContainer, TableDetails, ThField, ThValue, Tr } from "./DetailStyle";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dataDentis, setDoctor] = useState("");
  const { id } = useParams();
  const fields = ["name", "email", "phone", "website"];

  const getDetailDentist = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    setDoctor(data);
  };

  useEffect(() => {
    getDetailDentist();
  }, []);

  return (
    <DetailContainer>
      <h1> Detail Dentist { id } </h1>
        <TableDetails>
        <tbody>
          {fields.map(field => (
            <Tr key={field}>
              <ThField>{field}</ThField>
              <ThValue>{dataDentis[field]}</ThValue>
            </Tr>
          ))}
        </tbody>
      </TableDetails>
    </DetailContainer>
  );
};

export default Detail;
