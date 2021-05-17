import React from "react";
// import "./index.scss";
import icon from "icon.png";
import { Link, useRoute } from "wouter";
import { PAGES } from 'config';

function Layout({ children }) {
  const [ isActive ] = useRoute(PAGES.LOGIN_FORM)

  return (
    <div className="layout-container">
      <header>
        <img src={icon} alt="icon"></img>
      </header>
      <main>
        <div className="card card-container">{children}</div>
      </main>
      { !isActive && <Link className="link" to="/">Enter other email</Link> }
      <footer>
        <a
          className="copyright link"
          href={`https://www.linkedin.com/in/kim-garcia-9b0b86136/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright{` ${new Date().getFullYear()}`} © Kim Garcia
        </a>
      </footer>
    </div>
  );
}

export default Layout;
