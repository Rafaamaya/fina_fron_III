import React, { useState } from "react";
import TextInput from "./TextInput/TextInput";
import { objeto } from "../constant/Objeto";
import {
  Alert,
  Button,
  Container,
  FormContainer,
  H1,
} from "./FormStyled";
import { validarEmail } from "../utils/validarEmail";

const inputObjet = objeto;

const Formulario = () => {
  const [values, setValues] = useState({ nombre: "", email: "" });
  const [validacion, setValidacion] = useState(false);
  const [mensaje, setMensaje] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("rafa", validarEmail(values.email));
    if (values.nombre.trim().length > 5 && validarEmail(values.email) ) {
      setValidacion(false);
      setMensaje(true)
    } else {
      setValidacion(true);
      setMensaje(false)
    }
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [key]: value });
  };

  return (
    <Container>
      <FormContainer id="login-form" onSubmit={handleSubmit}>
        <H1>Want to know more?</H1>
        <p>Send us your questions and we will contact you</p>
        {inputObjet.map((field) => (
          <TextInput
            key={field.id}
            name={field.name}
            placeholder={field.placeholder}
            value={values[field.name]}
            onChange={handleChange}
          />
        ))}
        {validacion && (
          <Alert>"Por favor verifique su información nuevamente"</Alert>
        )}
        <Button form="login-form" btn="submit">
          Enviar
        </Button>
        {mensaje && (
              <Alert>Gracias {values.nombre}, te contactaremos cuando antes vía mail</Alert>
        )}
    
      </FormContainer>
    </Container>
  );
};

export default Formulario;
