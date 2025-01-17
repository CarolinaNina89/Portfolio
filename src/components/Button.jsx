import React from "react";

function Button({ text }) {
  return (
    <a
      className="button"
      href="mailto:carolinajakobsson@hotmail.com?subject=Carolina, let's connect!&body="
    >
      {text}
    </a>
  );
}

export default Button;
