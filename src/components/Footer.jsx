import React from "react";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer>
      <div>
        <small>
          &copy; Skin Signal {date} by{" "}
          <a href='https://rina-portfolio.netlify.app/'>Rina</a>
        </small>
      </div>
    </footer>
  );
}
