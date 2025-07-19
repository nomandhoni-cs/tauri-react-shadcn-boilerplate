import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100 text-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-3">
          Welcome to Tauri + React
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Click on the Tauri, Vite, and React logos to learn more.
        </p>

        <form
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6"
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
        >
          <input
            id="greet-input"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 ease-in-out text-lg"
          >
            Greet
          </button>
        </form>

        {greetMsg && (
          <p className="mt-4 text-xl font-medium text-green-600 bg-green-50 p-3 rounded-md">
            {greetMsg}
          </p>
        )}
      </div>
    </main>
  );
}

export default App;
