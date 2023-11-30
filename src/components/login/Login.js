import React from "react";

import "./login.css";

import Api from "../../api";

function Login({ onReceive }) {
  const handleGoogleLogin = async () => {
    try {
      let result = await Api.googlePopup();
      if (result) {
        onReceive(result.user);
      } else {
        alert("Error");
      }
    } catch (error) {
      console.error("Erro ao autenticar via Google:", error);
      alert("Erro ao autenticar via Google");
    }
  };

  return (
    <div className="login">
      <button onClick={handleGoogleLogin}>Logar com Google</button>
    </div>
  );
}

export default Login;
