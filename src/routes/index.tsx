import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Alumnos from "../pages/Alumnos";
import Calificaciones from "../pages/Calificaciones";
import Inscripciones from "../pages/Inscripciones";
import Materias from "../pages/Materias";

export default function Routes() {
  return (
    <Router>
      <Navbar>
        <Switch>
          <Route path="/alumnos" element={<Alumnos />} />
          <Route path="/materias" element={<Materias />} />
          <Route path="/inscripciones" element={<Inscripciones />} />
          <Route path="/calificaciones" element={<Calificaciones />} />
        </Switch>
      </Navbar>
    </Router>
  );
}
