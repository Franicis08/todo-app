import { useState, useEffect } from "react";
import Todo from "./routes/todo/Todo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./routes/home/LandingPage";
import About from "./routes/home/About";

import { Route, Routes } from "react-router";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("todos");

    return JSON.parse(storedTasks) || [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <>
      <main className="flex flex-col min-h-screen w-screen">
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/todo"
            element={<Todo tasks={tasks} setTasks={setTasks} />}
          />
        </Routes>

        <Footer tasks={tasks} />
      </main>
    </>
  );
}

export default App;
