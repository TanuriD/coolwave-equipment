import React from "react";

function Footer() {
  return (
    <footer
      style={{
        marginTop: "auto",
        padding: "1rem 2rem",
        backgroundColor: "#0f172a",
        color: "#e5e7eb",
        textAlign: "center",
      }}
    >
      <p>&copy; {new Date().getFullYear()} Coolwave Equipment. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

