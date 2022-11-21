function Login() {
  return (
    <form className="container" onSubmit={}>
      <h3>Inicia Sesión</h3>
      <div className="mb-3">
        <label>Correo Electrónico</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <label>Contraseña</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
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
