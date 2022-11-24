import { FormEvent } from "react";

interface FormState {
  name: string;
}

interface Props {
  formState: FormState;
  formSubmitHandler: (event: FormEvent<HTMLFormElement>) => void;
  formChangeHandler: (event: FormEvent<HTMLFormElement>) => void;
}

export default function SubjectForm({
  formState,
  formSubmitHandler,
  formChangeHandler,
}: Props) {
  return (
    <form onSubmit={formSubmitHandler} onChange={formChangeHandler}>
      <div className="mb-3">
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
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </div>
    </form>
  );
}
