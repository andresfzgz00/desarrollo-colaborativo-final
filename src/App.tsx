import { AuthProvider, useAuth } from "./context/AuthProvider";
function App() {
  const { currentUser } = useAuth() || {};
  console.log(currentUser)
  return (
    <AuthProvider />
  );
}

export default App;
