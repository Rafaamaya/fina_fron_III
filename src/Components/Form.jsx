import React, { useState } from "react";
import {
  ContactForm,
  ContactInput,
  BtnSubmit,
  ErrorMsg,
  InputContainer,
} from "./styledComponents";
/* import TransitionAlerts from '../Components/Alert'
import { validations } from "./utils/formValidations" */

const initialForm = { name: "", email: "" };

const Form = () => {

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialForm);
  const [nameSendForm, setSendForm] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
/*     const errors = validations(form);
    if (Object.keys(errors).length === 0) {
      console.log(form);
      setSendForm(form.name);
      setErrors(initialForm);
      setForm(initialForm);
    } else setErrors(errors); */
  };

  return (
    <ContactForm onSubmit={handleSubmit}>
      <InputContainer>
        <ContactInput
          placeholder="Full name"
          type="text"
          value={form.name}
          name="name"
          onChange={handleChange}
        />
        {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
      </InputContainer>

      <InputContainer>
        <ContactInput
          placeholder="Email"
          type="text"
          value={form.email}
          name="email"
          onChange={handleChange}
        />
        {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
      </InputContainer>

      <BtnSubmit type="submit">Submit</BtnSubmit>
      {/* <TransitionAlerts name={nameSendForm} setSendForm={setSendForm} /> */}
    </ContactForm>
  );
};

export default Form;