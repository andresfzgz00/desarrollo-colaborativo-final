import { FormEvent, useState } from "react";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const { logIn } = useAuth()

  const [form, setForm] = useState({email: '', password: ''})

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = form
    logIn(email, password)
  };

  const formChangeHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setForm(prevState => {
      const { value, type } = event.target as HTMLInputElement
      return {
        ...prevState,
        [type]: value
      }
    })
  }

  return (
    <form className="container" onSubmit={submitHandler} onChange={formChangeHandler}>
      <h3>Inicia Sesión</h3>
      <div className="mb-3">
        <label>Correo Electrónico</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={form.email}
        />
      </div>
      <div className="mb-3">
        <label>Contraseña</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={form.password}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Iniciar Sesión
        </button>
      </div>
    </form>
  );
}

export default Login;
