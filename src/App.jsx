import { useEffect, useState } from "react";
import Logo from "./assets/Logo";
import BentleyLogo from "./assets/BentleyLogo";
import ThemeIcon from "./assets/ThemeIcon";

function App() {
  const [isDarkMode, setIsDarkmode] = useState(function () {
    const storedValue = localStorage.getItem("isDarkmode");

    if (storedValue) {
      return JSON.parse(storedValue);
    } else {
      return false;
    }
  });

  useEffect(() => {
    if (isDarkMode === true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  function handleDarkModeToggle() {
    setIsDarkmode(!isDarkMode);
    localStorage.setItem("isDarkmode", JSON.stringify(!isDarkMode));

    if (isDarkMode === true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }

  return (
    <>
      <Header>
        <Logo />
        <Nav />
        <BentleyLogo />
        <ThemeIcon onClick={handleDarkModeToggle} />
      </Header>

      <main></main>
      <footer></footer>
    </>
  );
}

export default App;

function Header({ children }) {
  return (
    <>
      <header>
        <div className="container">{children}</div>
      </header>
    </>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Browse</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <button className="btn" href="#">
            BOOK A CONSULTATION
          </button>
        </li>
      </ul>
    </nav>
  );
}
