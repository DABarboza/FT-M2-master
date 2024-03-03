import { useState } from "react";
import s from "./Forms.module.css";

const validate = (form, setErrors, errors) => {
  if (!form.email)
    setErrors({ ...errors, email: "Email no puede estar vacío" });
  else {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email))
      setErrors({ ...errors, email: "" });
    else setErrors({ ...errors, email: "Email no es válido" });
  }
};

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });

    validate({ ...form, [property]: value }, setErrors, errors);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    alert("Login Exitoso");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="username">Email:</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={errors.email ? s.error : s.success}
        />
        <span> {errors.email} </span>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Form;
