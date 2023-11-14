import { useEffect, useRef } from "react";

export function Header({ children }) {
  return (
    <>
      <header>
        <div className="container">{children}</div>
      </header>
    </>
  );
}
export function Nav({ onToggleBrowse, browseRef }) {
  return (
    <nav>
      <ul>
        <li>
          <button
            ref={browseRef}
            className="nav-item"
            onClick={() => onToggleBrowse()}
          >
            Browse
          </button>
        </li>
        <li>
          <button className="nav-item" href="#">
            About
          </button>
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
export function SubMenu({ onMouseLeave, onMouseEnter }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.style.minHeight = "11rem";
  }, []);

  return (
    <div
      ref={ref}
      className="sub-menu"
      onMouseLeave={() => onMouseLeave()}
      onMouseEnter={() => onMouseEnter()}
    >
      test
    </div>
  );
}
