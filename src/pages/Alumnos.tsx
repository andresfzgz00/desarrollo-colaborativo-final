export default function Alumnos() {
  return (
    <form>
      <div className="row g-3">
        <div className="col-sm-6">
          <label htmlFor="lastName" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder=""
            value=""
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="lastName" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder=""
            value=""
          />
        </div>
      </div>
    </form>
  );
}
