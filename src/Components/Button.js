import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <button onClick={onClick}>{label}</button>
    </div>
  );
};

export default Button;
