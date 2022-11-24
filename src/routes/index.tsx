import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Students from "../pages/Students";
import Notes from "../pages/Notes";
import Inscriptions from "../pages/Inscriptions";
import Subjects from "../pages/Subjects";
import { StudentsProvider } from "../context/StudentsProvider";
import { SubjectsProvider } from "../context/SubjectsProvider";

export default function Routes() {
  return (
    <StudentsProvider>
      <SubjectsProvider>
        <Router>
          <Navbar>
            <Switch>
              <Route path="/alumnos" element={<Students />} />
              <Route path="/materias" element={<Subjects />} />
              <Route path="/inscripciones" element={<Inscriptions />} />
              <Route path="/calificaciones" element={<Notes />} />
            </Switch>
          </Navbar>
        </Router>
      </SubjectsProvider>
    </StudentsProvider>
  );
}
