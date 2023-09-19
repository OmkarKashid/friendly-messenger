import axios from "axios";
import { useState } from "react";
import { redirect } from "react-router-dom";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    if (firstname && lastname && email && username && password) {
      try {
        const response = await axios.post("http://localhost:5000/register", {
          first_name: firstname,
          last_name: lastname,
          email: email,
          username: username,
          password: password,
        });
        const data = await response.data;
        if (response.status === 200) {
          alert("Register successful");
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
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form
          action="/signup"
          method="POST"
          className="max-w-lg mx-auto flex flex-col gap-2">
          <input
            name="first_name"
            placeholder="first name"
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="border border-grey p-1 w-80 rounded-xl"
          />

          <input
            name="last_name"
            placeholder="last name"
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="border border-grey p-1 w-80 rounded-xl"
          />

          <input
            name="email"
            placeholder="email@domain"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-grey p-1 w-80 rounded-xl"
          />

          <input
            name="username"
            placeholder="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-grey p-1 w-80 rounded-xl"
          />

          <input
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-grey p-1 w-80 rounded-xl"
          />
          <button
            type="submit"
            onClick={handleRegister}
            className="bg-red-400 border border-grey p-1 w-80 rounded-xl">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
