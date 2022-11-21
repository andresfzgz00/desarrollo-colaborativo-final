import { AuthProvider } from "./context/AuthProvider";
import Login from "./pages/Login";

function App() {
  return (
    <AuthProvider>
      <div className="mt-5">
        <Login />
      </div>
    </AuthProvider>
  );
}

export default App;
