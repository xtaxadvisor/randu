import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Assuming your main App component exists
import "./index.css"; // ✅ Import Tailwind CSS and global styles
import ThemedButton from './components/ThemedButton';

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <div className="p-6">
      <h1 className="text-4xl font-bold text-blue-500">Hello Tailwind!</h1>
      <ThemedButton /> {/* ✅ Render the ThemedButton component */}
    </div>
  </React.StrictMode>
);