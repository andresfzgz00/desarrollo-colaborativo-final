import { FormEvent, useState } from "react";
import SubjectForm from "../components/SubjectsPage/SubjectForm";
import SubjectList from "../components/SubjectsPage/SubjectList";
import { useSubjects } from "../context/SubjectsProvider";

export default function Subjects() {
  const { addSubject } = useSubjects();
  const [form, setForm] = useState({ name: "" });

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

  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name } = form;
    addSubject(name);
    setForm({ name: "" });
  };

  return (
    <>
      <SubjectForm
        formChangeHandler={formChangeHandler}
        formState={form}
        formSubmitHandler={formSubmitHandler}
      />
      <SubjectList />
    </>
  );
}
