import {
  createContext,
  useState,
  PropsWithChildren,
  useContext,
} from "react";
import Student from "../entities/Student";

interface IStudentsContext {
  students: Student[];
  student?: Student;
  addStudent?: (name: string, lastName: string) => void;
  selectStudent?: (id: string) => void;
  deleteStudent?: (id: string) => void;
  updateStudent?: (toBeUpdatedStudent: Student) => void
}

const StudentsContext = createContext<IStudentsContext>({
  students: [],
});

export const useStudents = () => {
  return useContext(StudentsContext);
};

export function StudentsProvider({ children }: PropsWithChildren) {
  const [students, setStudents] = useState<Student[]>([]);
  const [student, setStudent] = useState<Student>();

  const addStudent = (name: string, lastName: string) => {
    setStudents(prevState => [...prevState, new Student(name, lastName)])
  }

  const selectStudent = (id: string) => {
    const selectedStudent = students.find(currentStudent => currentStudent.id === id)
    if (selectedStudent) setStudent(selectedStudent)
  }

  const deleteStudent = (id: string) => {
    setStudents(prevState => prevState.filter(currentStudent => {
        return currentStudent.id !== id
    }))
  }

  const updateStudent = (toBeUpdatedStudent: Student) => {
    const index = students.findIndex(currentStudent => currentStudent.id === toBeUpdatedStudent.id)
    if (index > -1) setStudents(prevState => {
        const auxState = [...prevState]
        auxState[index] = { ...prevState[index], ...toBeUpdatedStudent }
        return auxState
    })
  }

  const value = {
    students,
    student,
    addStudent,
    selectStudent,
    deleteStudent,
    updateStudent
  };

  return (
    <StudentsContext.Provider value={value}>
      {children}
    </StudentsContext.Provider>
  );
}
