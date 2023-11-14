import { useEffect, useRef, useState } from "react";
import Logo from "./assets/Logo";
import BentleyLogo from "./assets/BentleyLogo";
import ThemeIcon from "./assets/ThemeIcon";
import { debounce } from "debounce";
import { Header, Nav, SubMenu } from "./Header";

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
        <main>Main</main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
