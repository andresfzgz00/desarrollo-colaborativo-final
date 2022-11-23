import { FormEvent, useState } from "react";
import { useStudents } from "../context/Studentscontext";

export default function Alumnos() {
  const { students, addStudent, deleteStudent, selectStudent, student, updateStudent } = useStudents()
  const [form, setForm] = useState({ name: "", lastName: "" });

  const formChangeHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setForm((prevState) => {
      const { value, id } = event.target as HTMLInputElement;
      return {
        ...prevState,
        [id]: value,
      };
    });
  };

  const formHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, lastName } = form
    addStudent(name, lastName)
    setForm({ name: "", lastName: "" })
  };

  return (
    <form onSubmit={formHandler} onChange={formChangeHandler}>
      <div className="row g-3 mb-3">
        <div className="col-sm-6">
          <label htmlFor="lastName" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder=""
            value={form.name}
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
            value={form.lastName}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
    </form>
  );
}
