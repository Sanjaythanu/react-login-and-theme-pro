import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { ThemeContext } from "./ThemeContext";

function Home() {
  const { isLoggedIn } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{
      padding: "40px",
      minHeight: "100vh",
      background: theme === "light" ? "#fafafa" : "#121212",
      color: theme === "light" ? "#000" : "#fff"
    }}>
      <h1>Welcome to the Home Page</h1>

      {isLoggedIn ? (
        <p>You are logged in. Enjoy the app 😎</p>
      ) : (
        <p>Please login to unlock features 🔐</p>
      )}
    </div>
  );
}

export default Home;
