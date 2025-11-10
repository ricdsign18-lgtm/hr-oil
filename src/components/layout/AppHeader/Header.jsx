import React from "react";
import { useProjects } from "../../../contexts/ProjectContext";
import "./Header.css";
import { Notification } from "./Notification";
import { UserRegister } from "./UserRegister";
import { useAuth } from "../../../contexts/AuthContext";

export const Header = React.memo(() => {
  const { selectedProject } = useProjects();
  const { userData } = useAuth();

  return (
    <header className="app-header">
      <div className="header-info">
        {userData ? (
          <p>Bienvenido, {userData.username}</p>
        ) : (
          <p>Cargando...</p>
        )}
        <p>Resumen del Proyecto: {selectedProject?.name || "Ninguno seleccionado"}</p>
      </div>
      <div className="header-actions">
        <Notification />
        <UserRegister />
      </div>
    </header>
  );
});

Header.displayName = "Header";
