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

      <div className="inner-grid">
        <Main>
          <Hero />
          <Hero />
          <Hero />
          <Hero />
          <Hero />
          <Hero />
          <Hero />
          <Hero />
          <Hero />
          <Hero />
        </Main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;

function Main({ children }) {
  return <main className="container">{children}</main>;
}

function Hero() {
  return (
    <div className="hero">
      <div className="left">
        <h1>Transform your business with the Power of Data.</h1>
        <button className="btn" href="#">
          BOOK A CONSULTATION
        </button>
      </div>
      <div className="right">
        <IconawesomeLinkedin />
        <IconawesomeFacebookSquare />
        <IconawesomeTwitterSquare />
        <IconawesomeInstagram />
        <IconawesomeYoutube />
      </div>
    </div>
  );
}
