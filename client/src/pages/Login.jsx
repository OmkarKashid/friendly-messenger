import axios from "axios";
import { useState } from "react";
import { redirect } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    if (username && password) {
      try {
        const response = await axios.post("http://localhost:5000/login", {
          username,
          password,
        });
        const data = await response.data;
        if (response) {
          alert("login successful");
          console.log(response);
          redirect("/");
        } else {
          alert("Login failed");
        }
      } catch (e) {
        alert(e);
      }
    } else {
      alert("please add username and password");
    }
  }

  return (
    <div className="mt-24 grow flex items-center justify-center">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-lg mx-auto flex flex-col gap-2">
          <input
            type="text"
            placeholder="username"
            className="border border-grey p-1 w-80 rounded-xl"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="border border-grey p-1 w-80 rounded-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-red-400 border border-grey p-1 w-80 rounded-xl"
            onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
