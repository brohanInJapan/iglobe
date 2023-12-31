import { useEffect, useRef, useState } from "react";
import { debounce } from "debounce";

import { Header, Nav, SubMenu } from "./Header";

import Logo from "./assets/Logo";
import BentleyLogo from "./assets/BentleyLogo";
import ThemeIcon from "./assets/ThemeIcon";
import IconawesomeFacebookSquare from "./assets/IconawesomeFacebookSquare";
import IconawesomeLinkedin from "./assets/IconawesomeLinkedin";
import IconawesomeTwitterSquare from "./assets/IconawesomeTwitterSquare";
import IconawesomeYoutube from "./assets/IconawesomeYoutube";
import IconawesomeInstagram from "./assets/IconsimpleInstagram";

import Spline from "@splinetool/react-spline";

function App() {
  const [isDarkMode, setIsDarkmode] = useState(function () {
    const storedValue = localStorage.getItem("isDarkmode");

    if (storedValue) {
      return JSON.parse(storedValue);
    } else {
      return false;
    }
  });

  function handleDarkModeToggle() {
    setIsDarkmode(!isDarkMode);
    localStorage.setItem("isDarkmode", JSON.stringify(!isDarkMode));
  }

  useEffect(() => {
    if (isDarkMode === true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const browseRef = useRef(null);

  function toggleBrowse() {
    setIsBrowseOpen(!isBrowseOpen);
  }

  const handleBrowseOnMouseLeave = debounce(() => {
    setIsBrowseOpen(false);
    browseRef.current.blur();
  }, 450);

  const handleBrowseOnMouseEnter = () => {
    setIsBrowseOpen(true);
    handleBrowseOnMouseLeave.clear();
  };

  useEffect(() => {
    isBrowseOpen
      ? (browseRef.current.className = "nav-item open")
      : (browseRef.current.className = "nav-item");
  }, [isBrowseOpen]);

  return (
    <>
      <Header>
        <Logo />
        <Nav onToggleBrowse={toggleBrowse} browseRef={browseRef} />
        <BentleyLogo />
        <ThemeIcon onClick={handleDarkModeToggle} />

        {isBrowseOpen ? (
          <SubMenu
            onMouseLeave={handleBrowseOnMouseLeave}
            onMouseEnter={handleBrowseOnMouseEnter}
          ></SubMenu>
        ) : (
          <></>
        )}
      </Header>

      <Main>
        <Hero></Hero>
      </Main>

      <footer></footer>
    </>
  );
}

export default App;

function Main({ children }) {
  return <main>{children}</main>;
}

function Hero({ children }) {
  return (
    <>
      <div className="hero">
        <h1>Centralised Truth</h1>
        <p>
          Transform your role into a strategic force for productivity and
          impact.
        </p>
        <div>
          <IconawesomeLinkedin />
          <IconawesomeFacebookSquare />
          <IconawesomeTwitterSquare />
          <IconawesomeInstagram />
          <IconawesomeYoutube />
        </div>
        <button className="btn" href="#">
          BOOK A CONSULTATION
        </button>
      </div>

      {children}
    </>
  );
}

function Splash() {
  return <></>;
}
