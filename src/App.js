import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <AuthProvider>
        <Navbar />
        <Home />
    </AuthProvider>
  );
}

export default App;
