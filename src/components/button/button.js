import React from "react";
import './button.css'

function Button({ label }) {
  return <button data-testid="button" disabled={false} className="button-style">{label}</button>;
}

export default Button;
