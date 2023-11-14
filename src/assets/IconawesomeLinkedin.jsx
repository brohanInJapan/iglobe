const IconawesomeLinkedin = ({ fill = "var(--clr-secondary-200)" }) => {
  return (
    <a href="https://za.linkedin.com/company/theiglobegroup">
      <button className="nav-item">
        <svg
          height="20"
          width="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Icon_awesome-linkedin"
            d="M18.571,1.5H1.424A1.435,1.435,0,0,0,0,2.942V20.058A1.435,1.435,0,0,0,1.424,21.5H18.571A1.439,1.439,0,0,0,20,20.058V2.942A1.439,1.439,0,0,0,18.571,1.5ZM6.045,18.643H3.08V9.1H6.049v9.545ZM4.563,7.795A1.719,1.719,0,1,1,6.281,6.076,1.719,1.719,0,0,1,4.563,7.795ZM17.156,18.643H14.192V14c0-1.107-.022-2.531-1.54-2.531-1.545,0-1.781,1.205-1.781,2.451v4.723H7.906V9.1H10.75v1.3h.04A3.122,3.122,0,0,1,13.6,8.862c3,0,3.558,1.978,3.558,4.549Z"
            fill={fill}
            transform="translate(0 -1.5)"
            data-name="Icon awesome-linkedin"
          />
        </svg>
      </button>
    </a>
  );
};

export default IconawesomeLinkedin;
