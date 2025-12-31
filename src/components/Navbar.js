import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        padding: "15px",
        justifyContent: "space-between",
        background: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h3>Elite App 🚀</h3>

      <div>
        <button onClick={toggleTheme}>
          {theme === "light" ? "Dark" : "Light"}
        </button>

        {isLoggedIn ? (
          <button onClick={logout} style={{ marginLeft: "10px" }}>
            Logout
          </button>
        ) : (
          <button onClick={login} style={{ marginLeft: "10px" }}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
