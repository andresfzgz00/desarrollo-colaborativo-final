import { FormEvent } from "react";

interface FormState {
  name: string;
  lastName: string;
}

interface Props {
  formState: FormState;
  formSubmitHandler: (event: FormEvent<HTMLFormElement>) => void;
  formChangeHandler: (event: FormEvent<HTMLFormElement>) => void;
}

export default function StudentsForm({
  formState,
  formSubmitHandler,
  formChangeHandler,
}: Props) {
  return (
    <form onSubmit={formSubmitHandler} onChange={formChangeHandler}>
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
            value={formState.name}
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
            value={formState.lastName}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
    </form>
  );
}
