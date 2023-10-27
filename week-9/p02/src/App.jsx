// add the import for the auth provider and user status component

import "./App.css";
import { AuthProvider } from "./AuthContext";
import UserStatus from "./UserStatus";

function App() {
  // Wrap the children with the AuthProvider component
  return (
    <>
      <h1>Enhancing React with Hooks</h1>
      <div className="card">
        <AuthProvider>
          <UserStatus />
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
