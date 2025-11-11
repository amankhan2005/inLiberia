import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminSettingsForm from "./components/AdminSettingsForm";

// Pages
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

// Context
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />

        <main className="p-4 min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/settings" element={<AdminSettingsForm />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
