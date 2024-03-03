import React, { useState } from "react";
import "./Contact.modules.css";

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  let errors = {};
  if (!inputs.name) {
    errors.name = "Se requiere un nombre";
  }
  if (!regexEmail.test(inputs.email)) {
    errors.email = "Debe ser un correo electrónico";
  }
  if (!inputs.message) {
    errors.message = "Se requiere un mensaje";
  }
  return errors;
}

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
    setErrors(validate({ ...inputs, [event.target.name]: event.target.value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      alert("Datos completos");
      setInputs({
        name: "",
        email: "",
        message: "",
      });
      setErrors({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Debe llenar todos los campos");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre:</label>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre..."
          value={inputs.name}
          onChange={handleChange}
          className={errors.name && "warning"}
        />
        <p className="danger">{errors.name}</p>
        <label htmlFor="">Correo Electrónico:</label>
        <input
          type="text"
          name="email"
          placeholder="Escribe tu email..."
          value={inputs.email}
          onChange={handleChange}
          className={errors.email && "warning"}
        />
        <p className="danger">{errors.email}</p>
        <label htmlFor="">Mensaje:</label>
        <textarea
          type="text"
          name="message"
          placeholder="Escribe tu mensaje..."
          value={inputs.message}
          onChange={handleChange}
          className={errors.message && "warning"}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
