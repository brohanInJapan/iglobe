const ThemeIcon = ({ fill = "var(--clr-icon)", onClick }) => {
  return (
    <button className="nav-item" href="#" onClick={() => onClick()}>
      <svg
        height="20"
        width="20"
        viewBox="0 0 22.62 22.62"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12,18a5.975,5.975,0,0,1-2.5-.55,5.993,5.993,0,0,0,0-10.9A6,6,0,1,1,12,18m8-9.31V4H15.31L12,.69,8.69,4H4V8.69L.69,12,4,15.31V20H8.69L12,23.31,15.31,20H20V15.31L23.31,12Z"
          fill={fill}
          transform="translate(-0.69 -0.69)"
        />
      </svg>
    </button>
  );
};

export default ThemeIcon;