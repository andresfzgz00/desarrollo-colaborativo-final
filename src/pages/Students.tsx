import { FormEvent, useState } from "react";
import StudentList from "../components/StudentsPage/StudentList";
import StudentForm from "../components/StudentsPage/StudentForm";
import { useStudents } from "../context/StudentsProvider";

export default function Students() {
  const { addStudent } = useStudents();
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

  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, lastName } = form;
    addStudent(name, lastName);
    setForm({ name: "", lastName: "" });
  };

  return (
    <>
      <StudentForm
        formChangeHandler={formChangeHandler}
        formState={form}
        formSubmitHandler={formSubmitHandler}
      />
      <StudentList />
    </>
  );
}
