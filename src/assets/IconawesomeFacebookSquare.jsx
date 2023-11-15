const IconawesomeFacebookSquare = ({ fill = "var(--clr-icon)" }) => {
  return (
    <a href="https://www.facebook.com/iglobesa/">
      <button className="nav-item">
        <svg
          height="20"
          width="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Icon_awesome-facebook-square"
            d="M17.857,1.5H2.143A2.143,2.143,0,0,0,0,3.643V19.357A2.143,2.143,0,0,0,2.143,21.5H8.27V14.7H5.458V11.5H8.27V9.061c0-2.775,1.652-4.307,4.182-4.307a17.039,17.039,0,0,1,2.479.216V7.693h-1.4a1.6,1.6,0,0,0-1.8,1.729V11.5H14.8l-.491,3.2H11.73v6.8h6.127A2.143,2.143,0,0,0,20,19.357V3.643A2.143,2.143,0,0,0,17.857,1.5Z"
            fill={fill}
            transform="translate(0 -1.5)"
            data-name="Icon awesome-facebook-square"
          />
        </svg>
      </button>
    </a>
  );
};

export default IconawesomeFacebookSquare;
